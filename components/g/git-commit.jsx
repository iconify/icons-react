import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e_v0rac2z.css';
import '../../css/t/tb3os1bjv.css';
import '../../css/t/t2_zssbve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="e_v0rac2z"/><path class="tb3os1bjv"/><circle transform="rotate(90 12 12)" class="t2_zssbve"/></g>`,
		"fallback": "andrsrxn:git-commit",
	});
}

export default Component;
