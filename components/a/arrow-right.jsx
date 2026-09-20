import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xalh2vdwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xalh2vdwp"/>`,
		"fallback": "streamline-ultimate-color:arrow-right",
	});
}

export default Component;
