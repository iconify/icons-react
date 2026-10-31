import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vqcewgbzq.css';
import '../../css/b/bs7vqmyjm.css';
import '../../css/r/rhhhp2qhb.css';
import '../../css/x/xnm3zkbzz.css';
import '../../css/s/skq7p-b5x.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vqcewgbzq wm-shadow"/><path class="bs7vqmyjm"/><path class="rhhhp2qhb"/><path class="xnm3zkbzz"/><path class="skq7p-b5x"/><path class="v0eyaibau wm-s"/></g>`,
		"fallback": "withicons-retro:cloud-off",
	});
}

export default Component;
