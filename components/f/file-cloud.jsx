import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qwnjxxngd.css';
import '../../css/k/k3tln2m6v.css';
import '../../css/t/tdt80vbxu.css';
import '../../css/e/e_91t0o5m.css';
import '../../css/d/djx360byf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qwnjxxngd"/><path class="k3tln2m6v"/><path class="tdt80vbxu"/><path class="e_91t0o5m"/><path class="djx360byf"/></g>`,
		"fallback": "andrsrxn:file-cloud",
	});
}

export default Component;
