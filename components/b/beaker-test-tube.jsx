import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-ewrfbux.css';
import '../../css/i/ijl4o_bbm.css';
import '../../css/i/iw8bw5b-n.css';
import '../../css/j/jl8lropqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l-ewrfbux"/><path class="ijl4o_bbm"/><path class="iw8bw5b-n"/><path class="jl8lropqn"/></g>`,
		"fallback": "streamline-cyber-color:beaker-test-tube",
	});
}

export default Component;
