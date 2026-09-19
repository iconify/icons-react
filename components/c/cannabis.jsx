import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkspiv3bv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkspiv3bv"/>`,
		"fallback": "glyphs:cannabis",
	});
}

export default Component;
