import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ot6hezbni.css';
import '../../css/p/pyob_8bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ot6hezbni"/><path class="pyob_8bku"/></g>`,
		"fallback": "tabler:circle-arrow-down-right",
	});
}

export default Component;
