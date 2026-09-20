import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2f0_tbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2f0_tbdl"/>`,
		"fallback": "mynaui:brand-threads",
	});
}

export default Component;
