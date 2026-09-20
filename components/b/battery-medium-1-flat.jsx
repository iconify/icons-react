import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nyw0iwbxz.css';
import '../../css/o/ot_z94ltr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nyw0iwbxz"/><path clip-rule="evenodd" class="ot_z94ltr"/></g>`,
		"fallback": "streamline-flex-color:battery-medium-1-flat",
	});
}

export default Component;
