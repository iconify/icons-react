import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp975jbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp975jbsa"/>`,
		"fallback": "hugeicons:ai-scan",
	});
}

export default Component;
