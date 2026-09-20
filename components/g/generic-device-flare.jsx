import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oumarsd0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oumarsd0b"/>`,
		"fallback": "ix:generic-device-flare",
	});
}

export default Component;
