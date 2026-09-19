import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kfxi16bfw.css';
import '../../css/z/z0rxp-0ta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kfxi16bfw"/><circle class="z0rxp-0ta"/></g>`,
		"fallback": "hugeicons:bike",
	});
}

export default Component;
