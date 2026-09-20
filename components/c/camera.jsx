import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hg08p_bww.css';
import '../../css/l/lxldchbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hg08p_bww"/><path class="lxldchbuw"/></g>`,
		"fallback": "tabler:camera",
	});
}

export default Component;
