import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck_qurr6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck_qurr6x"/>`,
		"fallback": "coolicons:house-close-round",
	});
}

export default Component;
