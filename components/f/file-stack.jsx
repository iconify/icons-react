import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bpqso2bhd.css';
import '../../css/f/f4xu0wbqm.css';
import '../../css/m/mdhza1byh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bpqso2bhd"/><path class="f4xu0wbqm"/><path class="mdhza1byh"/></g>`,
		"fallback": "andrsrxn:file-stack",
	});
}

export default Component;
