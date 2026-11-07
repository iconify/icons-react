import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2bl_ob4g.css';
import '../../css/m/m0pn6bzto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y2bl_ob4g"/><path class="m0pn6bzto"/>`,
		"fallback": "solar:dialog-bold-duotone",
	});
}

export default Component;
