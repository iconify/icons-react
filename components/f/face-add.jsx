import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ethcq8boj.css';
import '../../css/s/sit0_i-ty.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ethcq8boj"/><path class="sit0_i-ty"/>`,
		"fallback": "carbon:face-add",
	});
}

export default Component;
