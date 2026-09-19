import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihjy39qrh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihjy39qrh"/>`,
		"fallback": "bi:arrow-up-left-square",
	});
}

export default Component;
