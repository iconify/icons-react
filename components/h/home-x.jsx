import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fgqm14bnl.css';
import '../../css/o/othk4-llk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fgqm14bnl"/><path class="othk4-llk"/></g>`,
		"fallback": "tabler:home-x",
	});
}

export default Component;
