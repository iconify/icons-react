import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx8akr0rj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx8akr0rj"/>`,
		"fallback": "streamline-flex:download-tray",
	});
}

export default Component;
