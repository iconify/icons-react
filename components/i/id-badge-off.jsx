import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u9g01n1mp.css';
import '../../css/t/t5t7eg3cu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u9g01n1mp"/><path class="t5t7eg3cu"/></g>`,
		"fallback": "tabler:id-badge-off",
	});
}

export default Component;
