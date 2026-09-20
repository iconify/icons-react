import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y-2tauc3q.css';
import '../../css/w/whudzuble.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="y-2tauc3q"/><path class="whudzuble"/></g>`,
		"fallback": "streamline:bag",
	});
}

export default Component;
