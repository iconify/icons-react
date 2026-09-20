import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ea4ueqboq.css';
import '../../css/k/kcg-_5bxs.css';
import '../../css/r/rj23s4y6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ea4ueqboq"/><path clip-rule="evenodd" class="kcg-_5bxs"/><path class="rj23s4y6h"/></g>`,
		"fallback": "tdesign:assignment",
	});
}

export default Component;
