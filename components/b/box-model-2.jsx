import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/khfvsobvn.css';
import '../../css/p/pi8645b3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="khfvsobvn"/><path class="pi8645b3h"/></g>`,
		"fallback": "tabler:box-model-2",
	});
}

export default Component;
