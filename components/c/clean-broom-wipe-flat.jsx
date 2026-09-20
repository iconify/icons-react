import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/okhhoy4rp.css';
import '../../css/k/kd12szbej.css';
import '../../css/u/uspg8c47o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="okhhoy4rp"/><path class="kd12szbej"/><path clip-rule="evenodd" class="uspg8c47o"/></g>`,
		"fallback": "streamline-plump-color:clean-broom-wipe-flat",
	});
}

export default Component;
