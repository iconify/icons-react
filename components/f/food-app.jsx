import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/j/j-g8ijvcl.css';
import '../../css/u/uvd7bo9co.css';
import '../../css/e/enjbkqf-z.css';
import '../../css/r/r9mao2buo.css';
import '../../css/n/nnz17rb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="j-g8ijvcl"/><path class="uvd7bo9co"/><path class="enjbkqf-z"/><path class="r9mao2buo"/><path class="nnz17rb9k"/></g>`,
		"fallback": "matita:food-app",
	});
}

export default Component;
