import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sc550qcvm.css';
import '../../css/n/ness8bcxq.css';
import '../../css/m/m10l9ab_g.css';
import '../../css/h/hhllavkac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sc550qcvm"/><path class="ness8bcxq"/><path class="m10l9ab_g"/><path class="hhllavkac"/></g>`,
		"fallback": "streamline-cyber-color:3d-glasses",
	});
}

export default Component;
