import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbfp1bcso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbfp1bcso"/>`,
		"fallback": "hugeicons:calendar-plus2",
	});
}

export default Component;
