import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nob2a0bbf.css';
import '../../css/z/zj_xi2bhv.css';
import '../../css/p/pzcpqfb7d.css';
import '../../css/g/gk6g-yhok.css';
import '../../css/s/shsojk4vy.css';
import '../../css/x/x214md_bs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nob2a0bbf"/><path class="wm-a zj_xi2bhv"/><path class="pzcpqfb7d"/><path class="gk6g-yhok wm-a"/><path class="shsojk4vy"/><path class="wm-a x214md_bs"/></g>`,
		"fallback": "withicons:avatar-unicorn",
	});
}

export default Component;
