import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qk1e3pb8m.css';
import '../../css/i/i78dihyle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qk1e3pb8m"/><path class="i78dihyle"/></g>`,
		"fallback": "tabler:brand-ctemplar",
	});
}

export default Component;
