import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh-3ee_ik.css';
import '../../css/e/ecbj7fz0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sh-3ee_ik"/><path class="ecbj7fz0m"/>`,
		"fallback": "solar:circle-top-down-bold",
	});
}

export default Component;
