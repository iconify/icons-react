import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzv1a95zz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pzv1a95zz"/>`,
		"fallback": "glyphs:bezier-pentagon-outline",
	});
}

export default Component;
