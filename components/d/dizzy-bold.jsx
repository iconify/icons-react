import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u98ht8bdk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u98ht8bdk"/>`,
		"fallback": "glyphs:dizzy-bold",
	});
}

export default Component;
