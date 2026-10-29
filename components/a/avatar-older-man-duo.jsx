import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jgczzeg9g.css';
import '../../css/f/fposg9rsp.css';
import '../../css/l/l617webtu.css';
import '../../css/b/bg3dj-bbo.css';
import '../../css/h/hgxk82s0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jgczzeg9g"/><path class="fposg9rsp wm-a"/><path class="l617webtu wm-a"/><path class="bg3dj-bbo"/><path class="hgxk82s0d wm-a"/></g>`,
		"fallback": "withicons:avatar-older-man-duo",
	});
}

export default Component;
