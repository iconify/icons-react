import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/h/hxcf9zb4q.css';
import '../../css/x/xm_53acnr.css';
import '../../css/a/aob06dbul.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="hxcf9zb4q"/><path class="xm_53acnr"/><rect class="aob06dbul"/></g>`,
		"fallback": "icon-park:distribute-horizontal-spacing",
	});
}

export default Component;
