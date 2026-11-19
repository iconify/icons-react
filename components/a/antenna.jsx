import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jvw31xb8s.css';
import '../../css/l/l21_s3bmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jvw31xb8s"/><path class="l21_s3bmg"/></g>`,
		"fallback": "andrsrxn:antenna",
	});
}

export default Component;
