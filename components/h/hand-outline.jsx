import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm7o27bnw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zm7o27bnw"/>`,
		"fallback": "glyphs:hand-outline",
	});
}

export default Component;
