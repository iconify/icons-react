import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpjp_6bax.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpjp_6bax"/>`,
		"fallback": "garden:credit-card-fill-12",
	});
}

export default Component;
