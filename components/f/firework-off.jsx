import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_u8rob9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_u8rob9x"/>`,
		"fallback": "mdi:firework-off",
	});
}

export default Component;
