import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8s-fbcud.css';
import '../../css/l/l684lsbnm.css';
import '../../css/d/dpav-jbxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q8s-fbcud"/><path class="l684lsbnm"/><path class="dpav-jbxz"/></g>`,
		"fallback": "tdesign:file-safety",
	});
}

export default Component;
