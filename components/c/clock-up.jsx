import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vs8spcu1y.css';
import '../../css/t/tmjdz4bhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vs8spcu1y"/><path class="tmjdz4bhr"/></g>`,
		"fallback": "tabler:clock-up",
	});
}

export default Component;
