import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojpr01bxm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojpr01bxm"/>`,
		"fallback": "glyphs:dollar-sign-outline",
	});
}

export default Component;
