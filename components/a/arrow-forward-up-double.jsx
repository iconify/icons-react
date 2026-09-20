import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u-6-3wb8q.css';
import '../../css/t/tq2sz7nhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u-6-3wb8q"/><path class="tq2sz7nhd"/></g>`,
		"fallback": "tabler:arrow-forward-up-double",
	});
}

export default Component;
