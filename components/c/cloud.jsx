import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/viftnxb9l.css';
import '../../css/h/hd7ma231g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="viftnxb9l"/><path class="hd7ma231g"/></g>`,
		"fallback": "akar-icons:cloud",
	});
}

export default Component;
