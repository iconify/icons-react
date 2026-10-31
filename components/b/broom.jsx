import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rcihk0bvz.css';
import '../../css/h/hpkvp1qks.css';
import '../../css/o/o_nvzfmsa.css';
import '../../css/v/vgf-o941x.css';
import '../../css/j/j3ol2wbso.css';
import '../../css/g/gq5peabcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rcihk0bvz wm-k"/><path class="hpkvp1qks wm-a"/><path class="o_nvzfmsa wm-deco"/><path class="vgf-o941x wm-k"/><path class="j3ol2wbso wm-a"/><path class="gq5peabcu wm-shadow"/></g>`,
		"fallback": "withicons-valentine:broom",
	});
}

export default Component;
