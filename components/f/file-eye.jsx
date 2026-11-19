import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pulndkbsr.css';
import '../../css/j/j5wuxdi0v.css';
import '../../css/p/p88bltb9a.css';
import '../../css/w/w2m_3fbqm.css';
import '../../css/q/qsolpuqay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pulndkbsr"/><path class="j5wuxdi0v"/><circle class="p88bltb9a"/><path class="w2m_3fbqm"/><path class="qsolpuqay"/></g>`,
		"fallback": "andrsrxn:file-eye",
	});
}

export default Component;
