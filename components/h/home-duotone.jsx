import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jxujf_bem.css';
import '../../css/w/wr1z0cbrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jxujf_bem"/><path class="wr1z0cbrp"/></g>`,
		"fallback": "keyline-icons:home-duotone",
	});
}

export default Component;
