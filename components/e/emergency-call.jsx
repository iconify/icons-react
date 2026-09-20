import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xkyx-tb4m.css';
import '../../css/v/vos-_9xjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xkyx-tb4m"/><path class="vos-_9xjz"/></g>`,
		"fallback": "streamline-sharp:emergency-call",
	});
}

export default Component;
