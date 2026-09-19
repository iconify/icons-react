import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv05icc_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv05icc_n"/>`,
		"fallback": "boxicons:fire-extinguisher-filled",
	});
}

export default Component;
