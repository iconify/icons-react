import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2do5-bxn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2do5-bxn"/>`,
		"fallback": "glyphs-poly:g",
	});
}

export default Component;
