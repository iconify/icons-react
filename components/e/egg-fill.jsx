import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef_45p5km.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef_45p5km"/>`,
		"fallback": "bi:egg-fill",
	});
}

export default Component;
