import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9d3mpq3y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9d3mpq3y"/>`,
		"fallback": "glyphs:comment-3-duo",
	});
}

export default Component;
