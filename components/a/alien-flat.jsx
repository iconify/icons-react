import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e1j9_jbah.css';
import '../../css/v/vw-odvbls.css';
import '../../css/z/zw-c3-bpc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="e1j9_jbah"/><path clip-rule="evenodd" class="vw-odvbls"/><path class="zw-c3-bpc"/></g>`,
		"fallback": "streamline-plump-color:alien-flat",
	});
}

export default Component;
