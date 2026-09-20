import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t537pzbol.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t537pzbol"/>`,
		"fallback": "streamline-color:heading-2-paragraph-styles-heading",
	});
}

export default Component;
