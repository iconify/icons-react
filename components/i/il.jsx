import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p2x0lubdy.css';
import '../../css/b/b6v50_yve.css';
import '../../css/r/royoh7bxp.css';
import '../../css/h/hpau8rbmj.css';

const viewBox = {"width":301,"height":219};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p2x0lubdy"/><path class="b6v50_yve"/><path class="royoh7bxp"/><path class="hpau8rbmj"/></g>`,
		"fallback": "cif:il",
	});
}

export default Component;
