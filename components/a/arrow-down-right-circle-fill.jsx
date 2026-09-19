import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwlfl3idl.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwlfl3idl"/>`,
		"fallback": "f7:arrow-down-right-circle-fill",
	});
}

export default Component;
