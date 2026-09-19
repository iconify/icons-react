import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tty458b5f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tty458b5f"/>`,
		"fallback": "fa6-solid:circle-info",
	});
}

export default Component;
