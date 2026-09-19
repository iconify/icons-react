import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4bp8ebol.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4bp8ebol"/>`,
		"fallback": "glyphs:divide-duo",
	});
}

export default Component;
