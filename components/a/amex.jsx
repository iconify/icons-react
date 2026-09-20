import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bspjx2xhr.css';
import '../../css/x/xje7wbbbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bspjx2xhr"/><path class="xje7wbbbz"/>`,
		"fallback": "lineicons:amex",
	});
}

export default Component;
