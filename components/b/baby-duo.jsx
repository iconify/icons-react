import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kiwki_l1n.css';
import '../../css/x/x74obiblr.css';
import '../../css/e/emma5uf1l.css';
import '../../css/w/wc_hv_34n.css';
import '../../css/n/n9-b4x4dp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kiwki_l1n"/><path class="x74obiblr"/><path class="emma5uf1l wm-a"/><path class="wc_hv_34n"/><path class="n9-b4x4dp"/></g>`,
		"fallback": "withicons:baby-duo",
	});
}

export default Component;
