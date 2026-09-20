import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/btgc_sbaw.css';
import '../../css/m/mcinq7b2v.css';
import '../../css/y/yu0shrb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="btgc_sbaw"/><path class="mcinq7b2v"/><path class="yu0shrb5i"/></g>`,
		"fallback": "majesticons:folder-check",
	});
}

export default Component;
