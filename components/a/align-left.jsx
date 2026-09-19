import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfp_h1hyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfp_h1hyt"/>`,
		"fallback": "hugeicons:align-left",
	});
}

export default Component;
