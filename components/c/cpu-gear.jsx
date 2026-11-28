import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmx1c8box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmx1c8box"/>`,
		"fallback": "noviair-light:cpu-gear",
	});
}

export default Component;
