import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arlvf1h-l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="arlvf1h-l"/>`,
		"fallback": "glyphs:gift-card-bold",
	});
}

export default Component;
