import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bu9b0nx_n.css';
import '../../css/s/ssdd89b6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bu9b0nx_n"/><path class="ssdd89b6p"/></g>`,
		"fallback": "tabler:brand-hackerrank",
	});
}

export default Component;
