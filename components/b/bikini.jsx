import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytw07_b-i.css';
import '../../css/v/vh7f-ub8s.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytw07_b-i"/><path class="vh7f-ub8s"/>`,
		"fallback": "fxemoji:bikini",
	});
}

export default Component;
