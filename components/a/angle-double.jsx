import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gszn0u93e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gszn0u93e"/>`,
		"fallback": "glyphs:angle-double",
	});
}

export default Component;
