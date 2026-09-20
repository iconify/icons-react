import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/usxb4tbdz.css';
import '../../css/a/ald5mib2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="usxb4tbdz"/><path class="ald5mib2v"/></g>`,
		"fallback": "tabler:arrow-bear-left",
	});
}

export default Component;
