import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p1i_5nb0f.css';
import '../../css/v/v-33t5vzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p1i_5nb0f"/><path class="v-33t5vzk"/></g>`,
		"fallback": "tabler:home-shield",
	});
}

export default Component;
