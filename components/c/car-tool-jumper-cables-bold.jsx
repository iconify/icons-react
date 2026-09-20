import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utv3gdowh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utv3gdowh"/>`,
		"fallback": "streamline-ultimate:car-tool-jumper-cables-bold",
	});
}

export default Component;
