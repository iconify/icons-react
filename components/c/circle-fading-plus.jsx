import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciq5eq_zu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciq5eq_zu"/>`,
		"fallback": "hugeicons:circle-fading-plus",
	});
}

export default Component;
