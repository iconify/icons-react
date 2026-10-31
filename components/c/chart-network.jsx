import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qtcynp3pk.css';
import '../../css/x/xkv61pb5s.css';
import '../../css/h/h3tgxabnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qtcynp3pk wm-shadow"/><path class="wm-shadow xkv61pb5s"/><path class="h3tgxabnt"/></g>`,
		"fallback": "withicons-brutal:chart-network",
	});
}

export default Component;
