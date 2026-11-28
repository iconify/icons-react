import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cov3g02at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cov3g02at"/>`,
		"fallback": "noviair-light:chevron-circle-right",
	});
}

export default Component;
