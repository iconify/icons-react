import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_zm4_bvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_zm4_bvl"/>`,
		"fallback": "mdi:gambling-chip",
	});
}

export default Component;
