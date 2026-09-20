import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz2uc7bmz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz2uc7bmz"/>`,
		"fallback": "ix:ellipse-arc",
	});
}

export default Component;
