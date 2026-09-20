import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v6-96c4go.css';
import '../../css/z/z3s_j730l.css';
import '../../css/f/fjuxbloss.css';
import '../../css/f/f3xmpdzii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v6-96c4go"/><path class="z3s_j730l"/><path class="fjuxbloss"/><path class="f3xmpdzii"/></g>`,
		"fallback": "streamline-cyber-color:bow-tie",
	});
}

export default Component;
