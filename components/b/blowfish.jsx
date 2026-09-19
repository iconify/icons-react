import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xrxnmobzp.css';
import '../../css/o/ofes0qbjo.css';
import '../../css/m/mhkyp_96e.css';
import '../../css/u/usdog0b1i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xrxnmobzp"/><path class="ofes0qbjo"/><path class="mhkyp_96e"/><path class="usdog0b1i"/></g>`,
		"fallback": "fluent-emoji-flat:blowfish",
	});
}

export default Component;
