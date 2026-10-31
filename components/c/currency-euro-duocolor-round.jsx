import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u3esjiziv.css';
import '../../css/g/gxzraf6oz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u3esjiziv"/><path class="gxzraf6oz"/></g>`,
		"fallback": "coolicons:currency-euro-duocolor-round",
	});
}

export default Component;
