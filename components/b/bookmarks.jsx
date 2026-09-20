import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uy8oi1b2k.css';
import '../../css/u/uhoodbb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uy8oi1b2k"/><path class="uhoodbb3x"/></g>`,
		"fallback": "tabler:bookmarks",
	});
}

export default Component;
