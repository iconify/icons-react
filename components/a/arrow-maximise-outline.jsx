import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prd1j7b1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prd1j7b1m"/>`,
		"fallback": "typcn:arrow-maximise-outline",
	});
}

export default Component;
