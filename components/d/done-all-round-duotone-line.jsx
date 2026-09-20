import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kgqyf9bra.css';
import '../../css/n/nzjh_8brw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kgqyf9bra"/><path clip-rule="evenodd" class="nzjh_8brw"/></g>`,
		"fallback": "lets-icons:done-all-round-duotone-line",
	});
}

export default Component;
