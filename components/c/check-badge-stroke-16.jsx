import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txh_v0bvp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txh_v0bvp"/>`,
		"fallback": "garden:check-badge-stroke-16",
	});
}

export default Component;
