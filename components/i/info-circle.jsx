import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thysx9bxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thysx9bxe"/>`,
		"fallback": "uil:info-circle",
	});
}

export default Component;
