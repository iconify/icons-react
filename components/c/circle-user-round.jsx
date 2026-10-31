import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klp_65b_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klp_65b_v"/>`,
		"fallback": "coolicons:circle-user-round",
	});
}

export default Component;
