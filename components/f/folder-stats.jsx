import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pk16079fy.css';
import '../../css/s/ssw2-urzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pk16079fy"/><path class="ssw2-urzx"/></g>`,
		"fallback": "tabler:folder-stats",
	});
}

export default Component;
