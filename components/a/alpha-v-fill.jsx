import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owl0vibvs.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owl0vibvs"/>`,
		"fallback": "memory:alpha-v-fill",
	});
}

export default Component;
