import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j5wfg6bef.css';
import '../../css/s/sx4milo_q.css';
import '../../css/q/qujwvbc1j.css';
import '../../css/n/nm5ll-bib.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j5wfg6bef"/><path class="sx4milo_q"/><path class="qujwvbc1j"/><path class="nm5ll-bib"/></g>`,
		"fallback": "cif:cl",
	});
}

export default Component;
