import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyu5mfb-h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyu5mfb-h"/>`,
		"fallback": "glyphs:e-outline",
	});
}

export default Component;
