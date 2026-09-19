import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osf5v3bmk.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osf5v3bmk"/>`,
		"fallback": "fa6-solid:cake-candles",
	});
}

export default Component;
