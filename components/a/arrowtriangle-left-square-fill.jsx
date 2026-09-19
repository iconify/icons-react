import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de6jlgzhj.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de6jlgzhj"/>`,
		"fallback": "f7:arrowtriangle-left-square-fill",
	});
}

export default Component;
