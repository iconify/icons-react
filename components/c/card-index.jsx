import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qp3dt69ou.css';
import '../../css/z/z_lynac_o.css';
import '../../css/i/ijr33pwtm.css';
import '../../css/l/l6qmkxtpm.css';
import '../../css/p/pjb8iv6lq.css';
import '../../css/e/e3igyfawl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qp3dt69ou"/><path class="z_lynac_o"/><path class="ijr33pwtm"/><path class="l6qmkxtpm"/><path class="pjb8iv6lq"/><path class="e3igyfawl"/></g>`,
		"fallback": "fluent-emoji-flat:card-index",
	});
}

export default Component;
