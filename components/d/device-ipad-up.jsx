import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf432jbly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf432jbly"/>`,
		"fallback": "tabler:device-ipad-up",
	});
}

export default Component;
