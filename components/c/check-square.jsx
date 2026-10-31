import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jh-d33clr.css';
import '../../css/i/ibtq3f5qv.css';
import '../../css/p/pixp96bko.css';
import '../../css/b/bcey50bak.css';
import '../../css/u/usaqtc2si.css';
import '../../css/n/nom4uic1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jh-d33clr wm-shadow"/><path class="ibtq3f5qv"/><path class="pixp96bko"/><path class="bcey50bak"/><path class="usaqtc2si"/><path class="nom4uic1z"/></g>`,
		"fallback": "withicons-retro:check-square",
	});
}

export default Component;
