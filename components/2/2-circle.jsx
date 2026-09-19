import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_cn00-dz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_cn00-dz"/>`,
		"fallback": "bi:2-circle",
	});
}

export default Component;
