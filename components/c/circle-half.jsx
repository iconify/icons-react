import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qup63mb8h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qup63mb8h"/>`,
		"fallback": "bi:circle-half",
	});
}

export default Component;
