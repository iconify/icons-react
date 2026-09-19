import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvkc56lvw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uvkc56lvw"/>`,
		"fallback": "glyphs:grid-sm-outline",
	});
}

export default Component;
