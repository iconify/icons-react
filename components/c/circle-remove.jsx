import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtyy-2w-p.css';
import '../../css/q/qds-v0bfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtyy-2w-p"/><path class="qds-v0bfg"/>`,
		"fallback": "circum:circle-remove",
	});
}

export default Component;
