import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s75x9ebku.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s75x9ebku"/>`,
		"fallback": "glyphs:hexagon",
	});
}

export default Component;
