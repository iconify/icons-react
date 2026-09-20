import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypmxq8cpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ypmxq8cpd"/>`,
		"fallback": "streamline-sharp:ai-vehicle-robot-1-remix",
	});
}

export default Component;
