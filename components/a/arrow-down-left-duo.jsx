import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dk__gyjbs.css';
import '../../css/q/qg_pme__y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dk__gyjbs"/><path class="qg_pme__y wm-a"/></g>`,
		"fallback": "withicons:arrow-down-left-duo",
	});
}

export default Component;
