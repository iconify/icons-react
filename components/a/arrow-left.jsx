import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgs7_xe4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgs7_xe4x"/>`,
		"fallback": "gridicons:arrow-left",
	});
}

export default Component;
