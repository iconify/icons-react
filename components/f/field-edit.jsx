import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j139cfbaq.css';
import '../../css/y/yavbssblw.css';
import '../../css/f/fkx8f7oxo.css';
import '../../css/k/kh-8qg60k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j139cfbaq"/><path class="yavbssblw"/><path clip-rule="evenodd" class="fkx8f7oxo"/><path class="kh-8qg60k"/></g>`,
		"fallback": "andrsrxn:field-edit",
	});
}

export default Component;
