import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u6zj-j8sb.css';
import '../../css/q/q8dpj2bvk.css';
import '../../css/h/h6idkx0rl.css';
import '../../css/y/yv8125n5a.css';
import '../../css/b/bkrqpvb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u6zj-j8sb"/><path class="q8dpj2bvk"/><path class="h6idkx0rl"/><path class="yv8125n5a"/><path class="bkrqpvb1g"/></g>`,
		"fallback": "streamline-cyber-color:drum-2",
	});
}

export default Component;
