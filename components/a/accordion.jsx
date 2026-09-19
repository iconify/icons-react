import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c9knrje3z.css';
import '../../css/i/ist-4cbyu.css';
import '../../css/h/he42b4bkk.css';
import '../../css/c/crq3x_bjs.css';
import '../../css/u/ugao3nbnr.css';
import '../../css/n/nct7myb2c.css';
import '../../css/b/bnw_oizjr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c9knrje3z"/><path class="ist-4cbyu"/><path class="he42b4bkk"/><path class="crq3x_bjs"/><path class="ugao3nbnr"/><path class="nct7myb2c"/><path class="bnw_oizjr"/></g>`,
		"fallback": "fluent-emoji-flat:accordion",
	});
}

export default Component;
