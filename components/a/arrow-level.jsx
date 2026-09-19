import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9q9quzbl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9q9quzbl"/>`,
		"fallback": "glyphs:arrow-level",
	});
}

export default Component;
