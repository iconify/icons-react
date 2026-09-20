import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l0t-u6t8y.css';
import '../../css/o/o8rzsblfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l0t-u6t8y"/><path class="o8rzsblfh"/></g>`,
		"fallback": "tabler:alphabet-bangla",
	});
}

export default Component;
