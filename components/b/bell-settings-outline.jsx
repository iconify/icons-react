import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dss09dbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dss09dbry"/>`,
		"fallback": "mdi:bell-settings-outline",
	});
}

export default Component;
