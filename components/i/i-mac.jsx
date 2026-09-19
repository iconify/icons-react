import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m724hab2g.css';
import '../../css/m/m8f33hbdy.css';
import '../../css/h/h2pjhacsp.css';
import '../../css/q/q_8a2tm5e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m724hab2g"/><path class="m8f33hbdy"/><path class="h2pjhacsp"/><path class="q_8a2tm5e"/></g>`,
		"fallback": "icon-park-outline:i-mac",
	});
}

export default Component;
