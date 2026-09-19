import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cczy4x2em.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cczy4x2em"/>`,
		"fallback": "bi:cloud-lightning-rain",
	});
}

export default Component;
