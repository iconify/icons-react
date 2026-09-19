import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip9anpq2t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip9anpq2t"/>`,
		"fallback": "glyphs-poly:e",
	});
}

export default Component;
