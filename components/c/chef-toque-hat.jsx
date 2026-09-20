import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w9m2n3-rb.css';
import '../../css/y/yrn807hif.css';
import '../../css/g/gfv38cb4s.css';
import '../../css/z/z2e8a5u2a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w9m2n3-rb"/><path class="yrn807hif"/><path class="gfv38cb4s"/><path class="z2e8a5u2a"/></g>`,
		"fallback": "streamline-flex-color:chef-toque-hat",
	});
}

export default Component;
