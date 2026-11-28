import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2q8uqztx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uwst6zbsv.css';
import '../../css/y/ywhlzacjl.css';
import '../../css/c/cg66pc8qp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2q8uqztx secondary"/><g class="dt0cm9dhy primary"><path class="uwst6zbsv"/><path class="ywhlzacjl"/><path class="cg66pc8qp"/></g>`,
		"fallback": "iconaut:align-horizontal-space-between-duo",
	});
}

export default Component;
