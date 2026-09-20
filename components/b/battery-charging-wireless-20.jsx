import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m392x3rmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m392x3rmd"/>`,
		"fallback": "mdi:battery-charging-wireless-20",
	});
}

export default Component;
