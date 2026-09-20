import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z12l_ub7w.css';
import '../../css/q/qyig9g1zl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z12l_ub7w"/><path class="qyig9g1zl"/></g>`,
		"fallback": "tdesign:archway",
	});
}

export default Component;
