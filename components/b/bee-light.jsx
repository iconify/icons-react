import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqiuh1juc.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqiuh1juc"/>`,
		"fallback": "pullo:bee-light",
	});
}

export default Component;
