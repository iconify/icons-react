import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghp_0ac9s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghp_0ac9s"/>`,
		"fallback": "glyphs:i",
	});
}

export default Component;
