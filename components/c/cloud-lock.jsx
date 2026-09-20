import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jynkrrlym.css';
import '../../css/k/k1q_nzb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jynkrrlym"/><path class="k1q_nzb3i"/></g>`,
		"fallback": "tabler:cloud-lock",
	});
}

export default Component;
