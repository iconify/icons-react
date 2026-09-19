import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s__mejbni.css';
import '../../css/k/kauewd74m.css';
import '../../css/c/ckb1_bqrl.css';
import '../../css/b/b5hgs-umg.css';
import '../../css/j/jctp5qpdf.css';
import '../../css/m/mlfa_bb9c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s__mejbni"/><path class="kauewd74m"/><path class="ckb1_bqrl"/><path class="b5hgs-umg"/><path class="jctp5qpdf"/><path class="mlfa_bb9c"/></g>`,
		"fallback": "fluent-emoji-flat:heart-with-ribbon",
	});
}

export default Component;
