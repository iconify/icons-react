import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nveg2nboz.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nveg2nboz"/>`,
		"fallback": "si-glyph:ghost",
	});
}

export default Component;
