import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aevshlixg.css';
import '../../css/l/lw3njyboo.css';
import '../../css/e/e7-v4qvsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aevshlixg"/><path class="lw3njyboo"/><path class="e7-v4qvsj"/></g>`,
		"fallback": "andrsrxn:cloud-off",
	});
}

export default Component;
