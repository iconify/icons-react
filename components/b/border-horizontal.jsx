import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hud2g9gnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hud2g9gnm"/>`,
		"fallback": "uit:border-horizontal",
	});
}

export default Component;
