import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd-dkvbvs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd-dkvbvs"/>`,
		"fallback": "carbon:ibm-machine-learning-for-zos",
	});
}

export default Component;
