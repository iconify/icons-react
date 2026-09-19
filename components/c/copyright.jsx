import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mgq_3dz5s.css';
import '../../css/s/s_0jjobxv.css';
import '../../css/u/u51089nwa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="mgq_3dz5s"/><path class="s_0jjobxv"/><path class="u51089nwa"/></g>`,
		"fallback": "icon-park-outline:copyright",
	});
}

export default Component;
