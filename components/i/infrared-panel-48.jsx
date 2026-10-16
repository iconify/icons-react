import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iol1rclgs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iol1rclgs"/>`,
		"fallback": "energy-icons:infrared-panel-48",
	});
}

export default Component;
