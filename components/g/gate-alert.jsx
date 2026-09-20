import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mld5sg2zl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mld5sg2zl"/>`,
		"fallback": "mdi:gate-alert",
	});
}

export default Component;
