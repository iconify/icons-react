import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8pp2tbfu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8pp2tbfu"/>`,
		"fallback": "garden:email-stroke-12",
	});
}

export default Component;
