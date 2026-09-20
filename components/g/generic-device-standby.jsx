import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy6i3wbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy6i3wbtu"/>`,
		"fallback": "ix:generic-device-standby",
	});
}

export default Component;
