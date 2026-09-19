import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/erm2vobey.css';
import '../../css/k/kuo4zjb-i.css';
import '../../css/b/bwwe5i45d.css';
import '../../css/n/n7jcfbcoz.css';
import '../../css/q/q805p_b3m.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="erm2vobey"/><path class="kuo4zjb-i"/><path class="bwwe5i45d"/><path class="n7jcfbcoz"/><path class="q805p_b3m"/></g>`,
		"fallback": "cif:ag",
	});
}

export default Component;
