import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryn_ssbhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryn_ssbhd"/>`,
		"fallback": "cbi:f1-alt",
	});
}

export default Component;
