import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e23f5pbvr.css';
import '../../css/a/ajy-hbgee.css';
import '../../css/z/zvjgwzx0c.css';
import '../../css/b/b878dbd_m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e23f5pbvr"/><path class="ajy-hbgee"/><path class="zvjgwzx0c"/><path class="b878dbd_m"/>`,
		"fallback": "streamline-emojis:droplet",
	});
}

export default Component;
