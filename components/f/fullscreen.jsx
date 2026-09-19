import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv1ssxzig.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv1ssxzig"/>`,
		"fallback": "si-glyph:fullscreen",
	});
}

export default Component;
