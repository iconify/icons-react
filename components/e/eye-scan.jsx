import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ttjdcl2va.css';
import '../../css/r/rrn5x25ge.css';
import '../../css/r/r4gptjifp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ttjdcl2va"/><circle class="rrn5x25ge"/><path clip-rule="evenodd" class="r4gptjifp"/></g>`,
		"fallback": "andrsrxn:eye-scan",
	});
}

export default Component;
