import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zvzz0qbpl.css';
import '../../css/j/jyim-db-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zvzz0qbpl"/><path clip-rule="evenodd" class="jyim-db-p"/></g>`,
		"fallback": "keyline-icons:airplay-duotone",
	});
}

export default Component;
