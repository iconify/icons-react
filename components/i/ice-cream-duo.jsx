import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/it5sg7btx.css';
import '../../css/v/vfe7eta-y.css';
import '../../css/e/efpyzhttl.css';
import '../../css/t/t6q0p4bxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="it5sg7btx"/><path class="vfe7eta-y wm-a"/><path class="efpyzhttl wm-a"/><path class="t6q0p4bxh"/></g>`,
		"fallback": "withicons:ice-cream-duo",
	});
}

export default Component;
