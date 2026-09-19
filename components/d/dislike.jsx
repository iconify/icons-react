import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb-tf8bsm.css';

const viewBox = {"width":27,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb-tf8bsm"/>`,
		"fallback": "fontisto:dislike",
	});
}

export default Component;
