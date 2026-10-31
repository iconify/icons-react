import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ecy1zkb4e.css';
import '../../css/z/zyi9si3_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ecy1zkb4e"/><path class="zyi9si3_e"/></g>`,
		"fallback": "coolicons:brush-duocolor-round",
	});
}

export default Component;
