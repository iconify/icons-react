import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w5z9h1bev.css';
import '../../css/a/a77v0r38a.css';
import '../../css/z/zvft0ab-n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w5z9h1bev"/><path class="a77v0r38a"/><path class="zvft0ab-n"/></g>`,
		"fallback": "streamline-kameleon-color:bluetooth-duo",
	});
}

export default Component;
