import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au06jsb9u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au06jsb9u"/>`,
		"fallback": "glyphs:bezier-curve",
	});
}

export default Component;
