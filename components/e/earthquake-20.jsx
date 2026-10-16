import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wssriqbjc.css';
import '../../css/y/yvphjmmpy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wssriqbjc"/><path class="yvphjmmpy"/>`,
		"fallback": "energy-icons:earthquake-20",
	});
}

export default Component;
