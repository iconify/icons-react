import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvxjx97jd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dvxjx97jd"/>`,
		"fallback": "glyphs:canoe-2-outline",
	});
}

export default Component;
