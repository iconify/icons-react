import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/nwc-i49rl.css';
import '../../css/w/wid4-9w2a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="nwc-i49rl"/><path class="wid4-9w2a"/></g>`,
		"fallback": "streamline-plump:computer-pc-desktop",
	});
}

export default Component;
