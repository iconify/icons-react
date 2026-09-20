import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o57oqtj-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o57oqtj-r"/>`,
		"fallback": "ix:generic-device-rocket",
	});
}

export default Component;
