import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/osc22vzky.css';
import '../../css/v/vuob-ob_n.css';
import '../../css/k/kl6o0e96n.css';
import '../../css/c/cvgpmeq_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="osc22vzky"/><path class="vuob-ob_n"/><path class="kl6o0e96n"/><path class="cvgpmeq_r"/></g>`,
		"fallback": "streamline-cyber-color:design-mug",
	});
}

export default Component;
