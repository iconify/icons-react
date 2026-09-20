import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o3ctg0b0v.css';
import '../../css/b/bit3g1b8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o3ctg0b0v"/><path class="bit3g1b8c"/></g>`,
		"fallback": "tabler:arrow-loop-right",
	});
}

export default Component;
