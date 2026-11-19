import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m76y4kbws.css';
import '../../css/g/gfm1svwpg.css';
import '../../css/o/o0m9_bbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m76y4kbws"/><path class="gfm1svwpg"/><path class="o0m9_bbec"/></g>`,
		"fallback": "andrsrxn:file-rs",
	});
}

export default Component;
