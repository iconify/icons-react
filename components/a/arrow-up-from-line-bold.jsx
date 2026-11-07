import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm2cgjbbr.css';
import '../../css/v/vh0_98nmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm2cgjbbr"/><path class="vh0_98nmz"/>`,
		"fallback": "solar:arrow-up-from-line-bold",
	});
}

export default Component;
