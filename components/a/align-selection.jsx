import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/kiri2bcdh.css';
import '../../css/w/wlfrhd-pk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="kiri2bcdh"/><path class="wlfrhd-pk"/></g>`,
		"fallback": "streamline-plump:align-selection",
	});
}

export default Component;
