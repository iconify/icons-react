import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zsy-f3b7y.css';
import '../../css/c/cz7ht8bwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zsy-f3b7y"/><path class="cz7ht8bwt"/></g>`,
		"fallback": "tabler:brand-apple-podcast",
	});
}

export default Component;
