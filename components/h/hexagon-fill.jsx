import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw_r_-5rj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw_r_-5rj"/>`,
		"fallback": "bi:hexagon-fill",
	});
}

export default Component;
