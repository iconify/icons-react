import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a6pbxfl7e.css';
import '../../css/v/vg02ge-wk.css';
import '../../css/g/gdrvh_bcx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="a6pbxfl7e"/><path class="vg02ge-wk"/><path class="gdrvh_bcx"/></g>`,
		"fallback": "healthicons:general-surgery2x-outline",
	});
}

export default Component;
