import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx4tahbow.css';
import '../../css/g/ge30ml4_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx4tahbow"/><path class="ge30ml4_m"/>`,
		"fallback": "boxicons:arrow-in-down-circle-half-filled",
	});
}

export default Component;
