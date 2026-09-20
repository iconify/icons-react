import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9wlkx5ik.css';
import '../../css/a/a24bhvw7q.css';
import '../../css/d/dped_fnxb.css';
import '../../css/d/dcp4mqbwn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k9wlkx5ik"/><path clip-rule="evenodd" class="a24bhvw7q"/><path class="dped_fnxb"/><path clip-rule="evenodd" class="dcp4mqbwn"/></g>`,
		"fallback": "streamline-color:information-desk-flat",
	});
}

export default Component;
