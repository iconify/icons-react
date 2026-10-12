import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ulztb5btu.css';
import '../../css/o/o6aoaybqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-180 21.24 21.24)" class="ulztb5btu"/><path class="o6aoaybqj"/></g>`,
		"fallback": "andrsrxn:border-right",
	});
}

export default Component;
