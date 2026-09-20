import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f81e9ebhg.css';
import '../../css/c/czym_fbdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f81e9ebhg"/><path class="czym_fbdp"/></g>`,
		"fallback": "tabler:brand-meetup",
	});
}

export default Component;
