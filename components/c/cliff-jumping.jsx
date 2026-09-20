import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sjrttvbqp.css';
import '../../css/e/e_5zefb7o.css';
import '../../css/o/oiiosactn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sjrttvbqp"/><path class="e_5zefb7o"/><path class="oiiosactn"/></g>`,
		"fallback": "tabler:cliff-jumping",
	});
}

export default Component;
