import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k7mj2-27h.css';
import '../../css/u/uyenbzb3g.css';
import '../../css/h/hkagjwcod.css';
import '../../css/c/c_6s7q6aj.css';
import '../../css/i/icudz-5nr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k7mj2-27h"/><path class="uyenbzb3g"/><path class="hkagjwcod"/><path class="c_6s7q6aj"/><path class="icudz-5nr"/></g>`,
		"fallback": "streamline-flex-color:bug-antivirus-shield",
	});
}

export default Component;
