import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucokltb_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="ucokltb_m"/>`,
		"fallback": "wordpress:add-submenu",
	});
}

export default Component;
