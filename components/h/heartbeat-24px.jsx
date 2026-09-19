import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxz5aqj2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxz5aqj2b"/>`,
		"fallback": "healthicons:heartbeat-24px",
	});
}

export default Component;
