import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/geh2k2fjt.css';
import '../../css/h/hfamrj_io.css';
import '../../css/v/vmd06seyc.css';
import '../../css/j/jff6p_bic.css';
import '../../css/n/nq-osyb3u.css';
import '../../css/c/cfx1q448n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="geh2k2fjt"/><path class="hfamrj_io"/><path class="vmd06seyc"/><path class="jff6p_bic"/><path class="nq-osyb3u"/><path class="cfx1q448n"/></g>`,
		"fallback": "fluent-emoji-flat:clapping-hands",
	});
}

export default Component;
