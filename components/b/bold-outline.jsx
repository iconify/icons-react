import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8md_ek4g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a8md_ek4g"/>`,
		"fallback": "glyphs:bold-outline",
	});
}

export default Component;
