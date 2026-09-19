import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqyi3dbbf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqyi3dbbf"/>`,
		"fallback": "glyphs:circle-half",
	});
}

export default Component;
