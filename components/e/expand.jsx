import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkn4d7nbl.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkn4d7nbl"/>`,
		"fallback": "fa6-solid:expand",
	});
}

export default Component;
