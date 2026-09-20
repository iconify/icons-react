import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fuchy-bvl.css';
import '../../css/z/zv7yxeb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fuchy-bvl"/><path class="zv7yxeb2i"/></g>`,
		"fallback": "keyline-icons:cursor-panel-fill",
	});
}

export default Component;
