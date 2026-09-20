import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/q/q6vzj7b7q.css';
import '../../css/m/mg4c9fbzu.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="q6vzj7b7q"/><path class="mg4c9fbzu"/></g>`,
		"fallback": "system-uicons:duplicate",
	});
}

export default Component;
