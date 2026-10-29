import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hcaie_vox.css';
import '../../css/m/mce9chbnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hcaie_vox"/><path class="mce9chbnc wm-a"/></g>`,
		"fallback": "withicons:hard-hat",
	});
}

export default Component;
