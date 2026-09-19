import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb_j-j7cs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb_j-j7cs"/>`,
		"fallback": "griddy-icons:concierge-bell-filled",
	});
}

export default Component;
