import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kxg1y7b6d.css';
import '../../css/i/i8om35b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kxg1y7b6d"/><path class="i8om35b2v"/></g>`,
		"fallback": "tabler:earphone-bluetooth",
	});
}

export default Component;
