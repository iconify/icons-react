import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phfy6f6ly.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="phfy6f6ly"/>`,
		"fallback": "glyphs:gift-2-outline",
	});
}

export default Component;
