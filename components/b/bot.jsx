import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w7_vazn9d.css';
import '../../css/w/wh0tzmd6d.css';
import '../../css/j/jefb58bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w7_vazn9d"/><rect class="wh0tzmd6d"/><path class="jefb58bpl"/></g>`,
		"fallback": "lucide:bot",
	});
}

export default Component;
