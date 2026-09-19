import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z-i1fsn1z.css';
import '../../css/x/xzfhtcs8o.css';
import '../../css/p/pyx_7bcip.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z-i1fsn1z"/><path class="xzfhtcs8o"/><path clip-rule="evenodd" class="pyx_7bcip"/></g>`,
		"fallback": "icon-park-outline:file-question",
	});
}

export default Component;
