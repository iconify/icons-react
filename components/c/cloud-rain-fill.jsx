import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fewzlh02g.css';
import '../../css/t/t147b4bll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fewzlh02g"/><path class="t147b4bll"/></g>`,
		"fallback": "keyline-icons:cloud-rain-fill",
	});
}

export default Component;
