import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/of-8w14ue.css';
import '../../css/a/as9w3qdsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="of-8w14ue"/><path class="as9w3qdsm"/></g>`,
		"fallback": "solar:cup-star-outline",
	});
}

export default Component;
