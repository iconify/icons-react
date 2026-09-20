import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i8o4ou2jc.css';
import '../../css/n/n184ddbjd.css';
import '../../css/k/ktrnanbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i8o4ou2jc"/><path class="n184ddbjd"/><path class="ktrnanbdb"/></g>`,
		"fallback": "tabler:brand-volkswagen",
	});
}

export default Component;
