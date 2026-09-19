import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jttibe98e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jttibe98e"/>`,
		"fallback": "glyphs:arrow-line-start-outline",
	});
}

export default Component;
