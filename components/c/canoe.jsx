import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgl5y72wm.css';
import '../../css/m/mgti0_btg.css';
import '../../css/a/awf6kabnh.css';
import '../../css/s/st53awbpp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pgl5y72wm"/><path class="mgti0_btg"/><path class="awf6kabnh"/><path class="st53awbpp"/></g>`,
		"fallback": "fluent-emoji-flat:canoe",
	});
}

export default Component;
