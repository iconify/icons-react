import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkawnrb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkawnrb2x"/>`,
		"fallback": "mdi:battery-charging-medium",
	});
}

export default Component;
