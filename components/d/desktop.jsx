import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_dvs5dfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_dvs5dfw"/>`,
		"fallback": "fe:desktop",
	});
}

export default Component;
