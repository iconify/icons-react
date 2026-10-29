import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oh6my1ryb.css';
import '../../css/i/icmkirbxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="oh6my1ryb"/><path class="icmkirbxg wm-s"/></g>`,
		"fallback": "withicons:house-plus-solid",
	});
}

export default Component;
