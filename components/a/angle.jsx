import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxfwt4bzc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxfwt4bzc"/>`,
		"fallback": "glyphs:angle",
	});
}

export default Component;
