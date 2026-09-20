import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mmziwwv6e.css';
import '../../css/k/k89yax7bb.css';
import '../../css/h/h1-a8neue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mmziwwv6e"/><path class="k89yax7bb"/><path class="h1-a8neue"/></g>`,
		"fallback": "tabler:coffee-off",
	});
}

export default Component;
