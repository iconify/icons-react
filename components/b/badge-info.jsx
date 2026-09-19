import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k371edcsm.css';
import '../../css/a/acjllyibf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k371edcsm"/><path class="acjllyibf"/>`,
		"fallback": "boxicons:badge-info",
	});
}

export default Component;
