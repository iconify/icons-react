import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mcomkx86t.css';
import '../../css/h/hjxuj8mwg.css';
import '../../css/c/c7xn2nbzm.css';
import '../../css/o/o-e951b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mcomkx86t"/><path class="hjxuj8mwg wm-a"/><path class="c7xn2nbzm wm-k"/><path class="o-e951b5s wm-a"/></g>`,
		"fallback": "withicons:file-audio-sketch",
	});
}

export default Component;
