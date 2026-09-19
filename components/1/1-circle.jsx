import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp_tly-yv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp_tly-yv"/>`,
		"fallback": "bi:1-circle",
	});
}

export default Component;
