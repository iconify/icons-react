import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nih4kjbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nih4kjbsf"/>`,
		"fallback": "heroicons-outline:gift-top",
	});
}

export default Component;
