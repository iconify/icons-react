import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c3rj_4l7d.css';
import '../../css/w/w4vr9i-ip.css';
import '../../css/k/kglhfwbau.css';
import '../../css/c/cr4p1u35l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c3rj_4l7d"/><path class="w4vr9i-ip"/><path class="kglhfwbau"/><path class="cr4p1u35l"/></g>`,
		"fallback": "streamline-cyber-color:door-exit",
	});
}

export default Component;
