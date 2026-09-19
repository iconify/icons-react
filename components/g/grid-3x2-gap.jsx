import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/raz1blbfp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="raz1blbfp"/>`,
		"fallback": "bi:grid-3x2-gap",
	});
}

export default Component;
