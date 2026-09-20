import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktgsm8eun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktgsm8eun"/>`,
		"fallback": "ix:aas-project-tia",
	});
}

export default Component;
