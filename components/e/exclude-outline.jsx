import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne3sn9etj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ne3sn9etj"/>`,
		"fallback": "glyphs:exclude-outline",
	});
}

export default Component;
