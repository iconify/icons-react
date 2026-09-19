import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw4d-fjve.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw4d-fjve"/>`,
		"fallback": "garden:duplicate-fill-16",
	});
}

export default Component;
