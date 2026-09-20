import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ts2yfi-uz.css';
import '../../css/y/yfow2i79k.css';
import '../../css/z/zi08dczyn.css';
import '../../css/s/srroxvbkj.css';
import '../../css/k/kypcbukjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ts2yfi-uz"/><path class="yfow2i79k"/><path class="zi08dczyn"/><path class="srroxvbkj"/><path class="kypcbukjr"/></g>`,
		"fallback": "solar:binoculars-outline",
	});
}

export default Component;
