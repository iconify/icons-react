import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-4flub9w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-4flub9w"/>`,
		"fallback": "garden:globe-fill-20",
	});
}

export default Component;
