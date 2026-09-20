import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybq7s_syt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybq7s_syt"/>`,
		"fallback": "ix:generic-device-forced-mode",
	});
}

export default Component;
