import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu8duj-kd.css';
import '../../css/v/vxwbsu80r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu8duj-kd"/><path class="vxwbsu80r"/>`,
		"fallback": "boxicons:arrow-in-down-left-square-filled",
	});
}

export default Component;
