import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gpbfcb15l.css';
import '../../css/p/pyx_7bcip.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gpbfcb15l"/><path clip-rule="evenodd" class="pyx_7bcip"/></g>`,
		"fallback": "icon-park-outline:file-tips",
	});
}

export default Component;
