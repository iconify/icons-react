import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6u564dvt.css';
import '../../css/d/dl_aixy-o.css';
import '../../css/n/nf-55objw.css';
import '../../css/c/c6hcid1zh.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6u564dvt"/><path class="dl_aixy-o"/><path class="nf-55objw"/><path class="c6hcid1zh"/></g>`,
		"fallback": "cif:gm",
	});
}

export default Component;
