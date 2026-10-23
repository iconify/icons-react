import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l3ljtjbkk.css';
import '../../css/u/uz9ur1b7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l3ljtjbkk"/><path class="uz9ur1b7o"/></g>`,
		"fallback": "vadivam:forklift",
	});
}

export default Component;
