import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s-n5w8zgc.css';
import '../../css/q/q9gt3cbsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s-n5w8zgc"/><path class="q9gt3cbsu"/></g>`,
		"fallback": "tabler:gift-card",
	});
}

export default Component;
