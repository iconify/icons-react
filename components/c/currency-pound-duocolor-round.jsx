import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xi553kbjw.css';
import '../../css/p/pwrx49byc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xi553kbjw"/><path class="pwrx49byc"/></g>`,
		"fallback": "coolicons:currency-pound-duocolor-round",
	});
}

export default Component;
