import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/runo8_caf.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="runo8_caf"/>`,
		"fallback": "si-glyph:cloud-heavy-rain",
	});
}

export default Component;
