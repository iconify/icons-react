import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fli0rkblj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fli0rkblj"/>`,
		"fallback": "mingcute:git-compare-2-fill",
	});
}

export default Component;
