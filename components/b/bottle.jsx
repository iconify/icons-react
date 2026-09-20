import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bm1pdl_ir.css';
import '../../css/u/un1o5acxp.css';
import '../../css/o/o3-olb8sj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bm1pdl_ir"/><path class="un1o5acxp"/><path class="o3-olb8sj"/></g>`,
		"fallback": "tabler:bottle",
	});
}

export default Component;
