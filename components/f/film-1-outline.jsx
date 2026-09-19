import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tenpnlz4z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tenpnlz4z"/>`,
		"fallback": "glyphs:film-1-outline",
	});
}

export default Component;
