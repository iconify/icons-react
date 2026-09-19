import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mgq_3dz5s.css';
import '../../css/g/gac3uxrkd.css';
import '../../css/m/mvmqk0bcf.css';
import '../../css/m/mbpu8ibdy.css';
import '../../css/n/nad5dccpb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="mgq_3dz5s"/><path class="gac3uxrkd"/><path class="mvmqk0bcf"/><path class="mbpu8ibdy"/><path class="nad5dccpb"/></g>`,
		"fallback": "icon-park-outline:bitcoin",
	});
}

export default Component;
