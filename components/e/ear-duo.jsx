import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo8l09wir.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo8l09wir"/>`,
		"fallback": "glyphs:ear-duo",
	});
}

export default Component;
