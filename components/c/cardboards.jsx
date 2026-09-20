import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oqb2z6bmn.css';
import '../../css/b/bt0qsbbem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oqb2z6bmn"/><path class="bt0qsbbem"/></g>`,
		"fallback": "tabler:cardboards",
	});
}

export default Component;
