import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by9j8n7zb.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by9j8n7zb"/>`,
		"fallback": "si-glyph:air-balloon",
	});
}

export default Component;
