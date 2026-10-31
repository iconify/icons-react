import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mfo7arfry.css';
import '../../css/c/cm1t_mbbd.css';
import '../../css/a/ahw7u-fri.css';
import '../../css/h/hupo_1bwk.css';
import '../../css/n/n1krc-bja.css';
import '../../css/a/ayhca7b6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mfo7arfry wm-shadow"/><path class="cm1t_mbbd"/><path class="ahw7u-fri"/><path class="hupo_1bwk"/><path class="n1krc-bja"/><path class="ayhca7b6e"/></g>`,
		"fallback": "withicons-retro:graduation-cap",
	});
}

export default Component;
