import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p8uxomp_m.css';
import '../../css/e/ena2-ccay.css';
import '../../css/u/u75regqcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p8uxomp_m"/><path class="ena2-ccay"/><path class="u75regqcd"/></g>`,
		"fallback": "tabler:hanger-2",
	});
}

export default Component;
