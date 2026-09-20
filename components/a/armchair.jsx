import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jy5z7b5-j.css';
import '../../css/m/m75qhob-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jy5z7b5-j"/><path class="m75qhob-x"/></g>`,
		"fallback": "tabler:armchair",
	});
}

export default Component;
