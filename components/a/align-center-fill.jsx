import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq1u79b5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq1u79b5m"/>`,
		"fallback": "si:align-center-fill",
	});
}

export default Component;
