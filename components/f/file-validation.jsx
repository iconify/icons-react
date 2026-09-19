import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/idcg027iu.css';
import '../../css/k/kh9rsjb-p.css';
import '../../css/v/v7xgjhbst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="idcg027iu"/><path class="kh9rsjb-p"/><path class="v7xgjhbst"/></g>`,
		"fallback": "hugeicons:file-validation",
	});
}

export default Component;
