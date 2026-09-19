import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgp46y8dz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgp46y8dz"/>`,
		"fallback": "glyphs:angle-double-duo",
	});
}

export default Component;
