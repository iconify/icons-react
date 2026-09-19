import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0qt1i8jz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0qt1i8jz"/>`,
		"fallback": "codicon:gift",
	});
}

export default Component;
