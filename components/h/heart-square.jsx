import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gj9v-ebfl.css';
import '../../css/h/h-nzho4ef.css';
import '../../css/f/fwef37bwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gj9v-ebfl"/><path class="h-nzho4ef"/><path class="fwef37bwx"/></g>`,
		"fallback": "andrsrxn:heart-square",
	});
}

export default Component;
