import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/af8ke863m.css';
import '../../css/r/rg3xj6out.css';
import '../../css/v/vyb-tzbpg.css';
import '../../css/b/bo1pywb9h.css';
import '../../css/g/gxmf5vbqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="af8ke863m wm-shadow"/><path class="rg3xj6out"/><path class="vyb-tzbpg"/><path class="bo1pywb9h"/><path class="gxmf5vbqk"/></g>`,
		"fallback": "withicons-retro:clover",
	});
}

export default Component;
