import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mr69ebfaw.css';
import '../../css/o/oc0vi5bvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mr69ebfaw"/><path class="oc0vi5bvd"/></g>`,
		"fallback": "iconamoon:cloud-off-light",
	});
}

export default Component;
