import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fg96x8m_w.css';
import '../../css/u/ujeo4grvn.css';
import '../../css/b/bk63w1bbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fg96x8m_w"/><path class="ujeo4grvn"/><path class="bk63w1bbc"/></g>`,
		"fallback": "lucide:drama",
	});
}

export default Component;
