import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdet07bna.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdet07bna"/>`,
		"fallback": "glyphs:chevron-outline",
	});
}

export default Component;
