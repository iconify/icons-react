import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf4g5ckay.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf4g5ckay"/>`,
		"fallback": "si-glyph:foot-sign",
	});
}

export default Component;
