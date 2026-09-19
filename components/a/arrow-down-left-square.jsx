import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sckmimb5e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sckmimb5e"/>`,
		"fallback": "bi:arrow-down-left-square",
	});
}

export default Component;
