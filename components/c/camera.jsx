import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/ptzwreb-a.css';
import '../../css/u/ukvmc8bfw.css';
import '../../css/q/q_pmp1bxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ptzwreb-a"/><circle class="ukvmc8bfw"/><path class="q_pmp1bxi"/></g>`,
		"fallback": "akar-icons:camera",
	});
}

export default Component;
