import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so61k4u2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so61k4u2j"/>`,
		"fallback": "boxicons:bath-filled",
	});
}

export default Component;
