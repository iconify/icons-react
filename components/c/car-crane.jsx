import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i9rz4zb0i.css';
import '../../css/b/b-8py_bmv.css';
import '../../css/r/rdqv_i1mz.css';
import '../../css/t/t36sebb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i9rz4zb0i"/><path class="b-8py_bmv"/><path class="rdqv_i1mz"/><path class="t36sebb8z"/></g>`,
		"fallback": "tabler:car-crane",
	});
}

export default Component;
