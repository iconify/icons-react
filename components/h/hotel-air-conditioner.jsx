import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g8iv-vt_n.css';
import '../../css/a/af28vybxi.css';
import '../../css/b/b2cdmq-zg.css';
import '../../css/j/jic0osb1g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g8iv-vt_n"/><path clip-rule="evenodd" class="af28vybxi"/><path class="b2cdmq-zg"/><path class="jic0osb1g"/></g>`,
		"fallback": "streamline-color:hotel-air-conditioner",
	});
}

export default Component;
