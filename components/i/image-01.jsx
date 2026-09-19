import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e2i1rhbxz.css';
import '../../css/j/jvtjbnueh.css';
import '../../css/u/ufhz_q2qg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="e2i1rhbxz"/><path class="jvtjbnueh"/><path class="ufhz_q2qg"/></g>`,
		"fallback": "hugeicons:image-01",
	});
}

export default Component;
