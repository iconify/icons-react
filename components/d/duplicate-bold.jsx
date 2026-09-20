import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uzuy-s02d.css';
import '../../css/k/knaw6qbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uzuy-s02d"/><path class="knaw6qbiv"/></g>`,
		"fallback": "streamline-ultimate:duplicate-bold",
	});
}

export default Component;
