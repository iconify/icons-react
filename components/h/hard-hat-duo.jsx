import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k75tc6b0u.css';
import '../../css/u/uas-gvbrx.css';
import '../../css/m/mce9chbnc.css';
import '../../css/h/hcaie_vox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k75tc6b0u"/><path class="uas-gvbrx wm-a"/><path class="mce9chbnc wm-a"/><path class="hcaie_vox"/></g>`,
		"fallback": "withicons:hard-hat-duo",
	});
}

export default Component;
