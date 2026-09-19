import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qf894pveg.css';
import '../../css/p/pxj_3ibfa.css';
import '../../css/r/rbdae1bqv.css';
import '../../css/e/e3ccuccug.css';
import '../../css/x/xs3pgtb2a.css';
import '../../css/c/cfx1q448n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qf894pveg"/><path class="pxj_3ibfa"/><path class="rbdae1bqv"/><path class="e3ccuccug"/><path class="xs3pgtb2a"/><path class="cfx1q448n"/></g>`,
		"fallback": "fluent-emoji-flat:clapping-hands-light",
	});
}

export default Component;
