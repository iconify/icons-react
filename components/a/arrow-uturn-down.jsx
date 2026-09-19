import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npa4pmb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npa4pmb1v"/>`,
		"fallback": "heroicons:arrow-uturn-down",
	});
}

export default Component;
