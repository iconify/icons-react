import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d456dcc0x.css';
import '../../css/z/z7g5v_12k.css';
import '../../css/m/mjyoyf4pz.css';
import '../../css/q/qk5kz1ilb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d456dcc0x"/><path class="z7g5v_12k"/><path class="mjyoyf4pz"/><path class="qk5kz1ilb"/></g>`,
		"fallback": "streamline-cyber-color:cloud-storm",
	});
}

export default Component;
