import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/htmi_6bpu.css';
import '../../css/l/lwil42b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="htmi_6bpu"/><path class="lwil42b1f"/></g>`,
		"fallback": "stash:cloud-plus-light",
	});
}

export default Component;
