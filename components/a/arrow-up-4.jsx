import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/t/t6z_hx3dj.css';
import '../../css/m/m3lse8uhj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="t6z_hx3dj"/><path clip-rule="evenodd" class="m3lse8uhj"/></g>`,
		"fallback": "streamline-plump:arrow-up-4",
	});
}

export default Component;
