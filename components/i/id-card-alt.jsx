import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-x-swrga.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-x-swrga"/>`,
		"fallback": "fa-solid:id-card-alt",
	});
}

export default Component;
