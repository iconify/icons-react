import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vkxb7roeu.css';
import '../../css/o/osfl_dbub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vkxb7roeu"/><path class="osfl_dbub"/></g>`,
		"fallback": "coolicons:folder-check-duocolor-round",
	});
}

export default Component;
