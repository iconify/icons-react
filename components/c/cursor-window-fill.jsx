import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fuchy-bvl.css';
import '../../css/t/tqif5kbes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fuchy-bvl"/><path class="tqif5kbes"/></g>`,
		"fallback": "keyline-icons:cursor-window-fill",
	});
}

export default Component;
