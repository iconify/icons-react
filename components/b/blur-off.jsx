import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbdu_8b7s.css';

const viewBox = {"width":408,"height":416};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbdu_8b7s"/>`,
		"fallback": "zmdi:blur-off",
	});
}

export default Component;
