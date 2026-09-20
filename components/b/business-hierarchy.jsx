import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bj0pzz_wo.css';
import '../../css/n/nhvxczbnk.css';
import '../../css/s/soa2b6b4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bj0pzz_wo"/><path class="nhvxczbnk"/><path class="soa2b6b4l"/></g>`,
		"fallback": "streamline-cyber-color:business-hierarchy",
	});
}

export default Component;
