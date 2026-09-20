import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w01yo8w-q.css';
import '../../css/x/x0tsfw-2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="w01yo8w-q"/><path class="x0tsfw-2d"/></g>`,
		"fallback": "keyline-icons:contacts-fill",
	});
}

export default Component;
