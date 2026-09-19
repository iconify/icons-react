import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb6kq3atm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb6kq3atm"/>`,
		"fallback": "boxicons:arrow-from-bottom-filled",
	});
}

export default Component;
