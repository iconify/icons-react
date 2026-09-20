import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd9drcb1u.css';

const viewBox = {"width":700,"height":294.423};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd9drcb1u"/>`,
		"fallback": "thesvg-color:disney",
	});
}

export default Component;
