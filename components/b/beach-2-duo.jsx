import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqe516b6x.css';
import '../../css/q/q1oze7b7n.css';
import '../../css/g/gd_kfccpd.css';
import '../../css/o/o3akt-byi.css';
import '../../css/c/cz7-vfb_n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xqe516b6x"/><path class="q1oze7b7n"/><path class="gd_kfccpd"/><path class="o3akt-byi"/><path class="cz7-vfb_n"/></g>`,
		"fallback": "streamline-kameleon-color:beach-2-duo",
	});
}

export default Component;
