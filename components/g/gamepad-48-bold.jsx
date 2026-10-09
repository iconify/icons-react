import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytd4rwhme.css';
import '../../css/a/a3u4_xbni.css';
import '../../css/e/ectk0ob8n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytd4rwhme"/><path class="a3u4_xbni"/><path class="ectk0ob8n"/>`,
		"fallback": "energy-icons:gamepad-48-bold",
	});
}

export default Component;
