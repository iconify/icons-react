import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qziv1ac4d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qziv1ac4d"/>`,
		"fallback": "glyphs:aperture-outline",
	});
}

export default Component;
