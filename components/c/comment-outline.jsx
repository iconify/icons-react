import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcbz_pozm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mcbz_pozm"/>`,
		"fallback": "glyphs:comment-outline",
	});
}

export default Component;
