import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f7raeib7y.css';
import '../../css/p/plgg98bdj.css';
import '../../css/i/i-oq5ub8f.css';
import '../../css/m/mdvkx-geo.css';
import '../../css/u/uxz8njb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f7raeib7y"/><path class="plgg98bdj"/><path class="i-oq5ub8f wm-a"/><path class="mdvkx-geo"/><path class="uxz8njb2w"/></g>`,
		"fallback": "withicons:avatar-bear-duo",
	});
}

export default Component;
