import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt_2hzb_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt_2hzb_i"/>`,
		"fallback": "coolicons:bell-round",
	});
}

export default Component;
