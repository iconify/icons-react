import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1zehub5g.css';
import '../../css/d/do_yi4-hw.css';
import '../../css/h/hyha3ublc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1zehub5g"/><path clip-rule="evenodd" class="do_yi4-hw"/><path class="hyha3ublc"/>`,
		"fallback": "solar:adhesive-plaster-2-bold",
	});
}

export default Component;
