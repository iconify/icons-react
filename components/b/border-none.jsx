import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ulztb5btu.css';
import '../../css/b/b8iuzm0ck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-180 21.24 21.24)" class="ulztb5btu"/><path class="b8iuzm0ck"/></g>`,
		"fallback": "andrsrxn:border-none",
	});
}

export default Component;
