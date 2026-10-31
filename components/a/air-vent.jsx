import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/t/t-w_wrblx.css';
import '../../css/k/kmangubhn.css';
import '../../css/j/j1_apjast.css';
import '../../css/g/gn83_cb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="t-w_wrblx"/><path class="kmangubhn wm-shine"/><path class="j1_apjast wm-k"/><path class="gn83_cb7i wm-a"/></g>`,
		"fallback": "withicons-kawaii:air-vent",
	});
}

export default Component;
