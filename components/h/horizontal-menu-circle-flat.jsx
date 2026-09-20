import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dcn445bjj.css';
import '../../css/s/sl4ue8q9l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dcn445bjj"/><path clip-rule="evenodd" class="sl4ue8q9l"/></g>`,
		"fallback": "streamline-plump-color:horizontal-menu-circle-flat",
	});
}

export default Component;
