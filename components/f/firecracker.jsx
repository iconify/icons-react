import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gw9b4gbyk.css';
import '../../css/b/bevchjwhi.css';
import '../../css/y/yhq7zacej.css';
import '../../css/z/zto_8pw8i.css';
import '../../css/k/kp7n6bbnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gw9b4gbyk wm-shadow"/><path class="bevchjwhi"/><path class="yhq7zacej"/><path class="zto_8pw8i"/><path class="kp7n6bbnk"/></g>`,
		"fallback": "withicons-retro:firecracker",
	});
}

export default Component;
