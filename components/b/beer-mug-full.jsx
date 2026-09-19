import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfzc_4bcf.css';
import '../../css/x/x645877qp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfzc_4bcf"/><path class="x645877qp"/>`,
		"fallback": "circum:beer-mug-full",
	});
}

export default Component;
