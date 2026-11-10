import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av0_gjbxd.css';
import '../../css/g/grx370fbc.css';
import '../../css/s/s43s198-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="av0_gjbxd"/><path class="grx370fbc"/><path class="s43s198-h"/></g>`,
		"fallback": "andrsrxn:api",
	});
}

export default Component;
