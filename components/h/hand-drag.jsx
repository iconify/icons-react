import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s516_l97p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s516_l97p"/>`,
		"fallback": "streamline-ultimate:hand-drag",
	});
}

export default Component;
