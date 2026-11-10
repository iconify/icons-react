import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aydtu_b4n.css';
import '../../css/t/t7lh1l2wd.css';
import '../../css/h/hcbw2pbbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aydtu_b4n"/><path class="t7lh1l2wd"/><path class="hcbw2pbbg"/></g>`,
		"fallback": "andrsrxn:file-out",
	});
}

export default Component;
