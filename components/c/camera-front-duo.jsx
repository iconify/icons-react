import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqe516b6x.css';
import '../../css/k/kpzt2sb5n.css';
import '../../css/d/dvh2rgq6n.css';
import '../../css/g/gbyxy6b_j.css';
import '../../css/v/vl3hbibnq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xqe516b6x"/><path class="kpzt2sb5n"/><path class="dvh2rgq6n"/><path class="gbyxy6b_j"/><path class="vl3hbibnq"/></g>`,
		"fallback": "streamline-kameleon-color:camera-front-duo",
	});
}

export default Component;
