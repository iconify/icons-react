import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrb1y4wkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrb1y4wkb"/>`,
		"fallback": "ci:arrow-sub-right-down",
	});
}

export default Component;
