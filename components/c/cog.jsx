import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1zrh8b9h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c1zrh8b9h"/>`,
		"fallback": "glyphs-poly:cog",
	});
}

export default Component;
