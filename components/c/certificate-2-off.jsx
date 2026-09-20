import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mf4d4cbem.css';
import '../../css/p/py_dg-b2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mf4d4cbem"/><path class="py_dg-b2k"/></g>`,
		"fallback": "tabler:certificate-2-off",
	});
}

export default Component;
