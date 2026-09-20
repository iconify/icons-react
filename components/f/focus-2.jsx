import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ocbxvn8pr.css';
import '../../css/m/mra23uidc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ocbxvn8pr"/><path class="mra23uidc"/></g>`,
		"fallback": "tabler:focus-2",
	});
}

export default Component;
