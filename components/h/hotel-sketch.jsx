import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sdf38muvh.css';
import '../../css/f/fet2cqbea.css';
import '../../css/g/g63vy454t.css';
import '../../css/t/tubrnps1o.css';
import '../../css/f/fd_m9bqpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sdf38muvh wm-k"/><path class="fet2cqbea wm-k"/><path class="g63vy454t wm-k"/><path class="tubrnps1o wm-s"/><path class="fd_m9bqpc wm-a"/></g>`,
		"fallback": "withicons:hotel-sketch",
	});
}

export default Component;
