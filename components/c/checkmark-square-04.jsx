import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pdvnedcdj.css';
import '../../css/n/ntzh4ccqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pdvnedcdj"/><path class="ntzh4ccqo"/></g>`,
		"fallback": "hugeicons:checkmark-square-04",
	});
}

export default Component;
