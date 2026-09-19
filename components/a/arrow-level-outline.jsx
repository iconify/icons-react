import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km523rbjd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="km523rbjd"/>`,
		"fallback": "glyphs:arrow-level-outline",
	});
}

export default Component;
