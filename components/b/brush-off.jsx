import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ub5nspc4y.css';
import '../../css/i/i9bh5s9bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ub5nspc4y"/><path class="i9bh5s9bz"/></g>`,
		"fallback": "tabler:brush-off",
	});
}

export default Component;
