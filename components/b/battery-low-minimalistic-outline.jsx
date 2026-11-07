import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzibxeopw.css';
import '../../css/o/osemxebgc.css';
import '../../css/o/ocb7_jb-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzibxeopw"/><path clip-rule="evenodd" class="osemxebgc"/><path class="ocb7_jb-g"/>`,
		"fallback": "solar:battery-low-minimalistic-outline",
	});
}

export default Component;
