import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/n/n1i6_2bkg.css';
import '../../css/z/zukmucctw.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="n1i6_2bkg"/><path class="zukmucctw"/></g>`,
		"fallback": "system-uicons:download-alt",
	});
}

export default Component;
