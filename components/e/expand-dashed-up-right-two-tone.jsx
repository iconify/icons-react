import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sz4fkkbjn.css';
import '../../css/m/mf2xnlsvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sz4fkkbjn"/><path class="mf2xnlsvd"/></g>`,
		"fallback": "keyline-icons:expand-dashed-up-right-two-tone",
	});
}

export default Component;
