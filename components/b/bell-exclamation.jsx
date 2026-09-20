import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpi7s0iih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpi7s0iih"/>`,
		"fallback": "tabler:bell-exclamation",
	});
}

export default Component;
