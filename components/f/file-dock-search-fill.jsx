import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o0n9q_5jv.css';
import '../../css/b/bate30btk.css';
import '../../css/r/r5k-ofblz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="o0n9q_5jv"/><path class="bate30btk"/><path clip-rule="evenodd" class="r5k-ofblz"/></g>`,
		"fallback": "lets-icons:file-dock-search-fill",
	});
}

export default Component;
