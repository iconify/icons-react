import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ucvq9ubqm.css';
import '../../css/h/h8svhkb0l.css';
import '../../css/s/su4crqbgo.css';
import '../../css/x/xswgfabro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ucvq9ubqm"/><path class="h8svhkb0l"/><path class="su4crqbgo"/><path class="xswgfabro"/></g>`,
		"fallback": "streamline-cyber-color:dress",
	});
}

export default Component;
