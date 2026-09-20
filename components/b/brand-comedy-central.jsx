import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b-nov7bvx.css';
import '../../css/y/ygf4ec0qt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b-nov7bvx"/><path class="ygf4ec0qt"/></g>`,
		"fallback": "tabler:brand-comedy-central",
	});
}

export default Component;
