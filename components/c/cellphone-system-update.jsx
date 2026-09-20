import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyg9p_u_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyg9p_u_f"/>`,
		"fallback": "mdi:cellphone-system-update",
	});
}

export default Component;
