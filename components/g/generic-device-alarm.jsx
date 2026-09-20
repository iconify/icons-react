import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myl30ub-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myl30ub-w"/>`,
		"fallback": "ix:generic-device-alarm",
	});
}

export default Component;
