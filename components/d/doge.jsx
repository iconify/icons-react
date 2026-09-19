import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ize7x6bri.css';
import '../../css/v/vtaebks8o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ize7x6bri"/><path class="vtaebks8o"/></g>`,
		"fallback": "cryptocurrency-color:doge",
	});
}

export default Component;
