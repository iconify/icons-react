import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiu0-hwpx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uiu0-hwpx"/>`,
		"fallback": "glyphs:credit-card-front-bold",
	});
}

export default Component;
