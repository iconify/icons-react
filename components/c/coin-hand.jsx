import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kmn1d9yof.css';
import '../../css/d/dzyw1bcez.css';
import '../../css/d/d6pmdjb5s.css';
import '../../css/u/uvtuwfb2y.css';
import '../../css/c/clsueg3in.css';
import '../../css/c/c8r1_9b9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kmn1d9yof"/><path class="dzyw1bcez"/><path class="d6pmdjb5s"/><path class="uvtuwfb2y"/><path class="clsueg3in"/><path class="c8r1_9b9y"/></g>`,
		"fallback": "streamline-cyber-color:coin-hand",
	});
}

export default Component;
