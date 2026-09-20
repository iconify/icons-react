import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rwmoieclp.css';
import '../../css/q/qk2k3fbxw.css';
import '../../css/z/zikmbib_q.css';
import '../../css/r/rmh_gdpam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rwmoieclp"/><path class="qk2k3fbxw"/><path class="zikmbib_q"/><path class="rmh_gdpam"/></g>`,
		"fallback": "tdesign:castle-3",
	});
}

export default Component;
