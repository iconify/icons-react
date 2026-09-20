import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ndfmym4jm.css';
import '../../css/i/iswynubfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ndfmym4jm"/><path class="iswynubfo"/></g>`,
		"fallback": "tabler:arrow-loop-left",
	});
}

export default Component;
