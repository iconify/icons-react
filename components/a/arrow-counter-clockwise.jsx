import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b-lnbdo9b.css';
import '../../css/n/n2vl01-eq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b-lnbdo9b"/><path class="n2vl01-eq"/></g>`,
		"fallback": "akar-icons:arrow-counter-clockwise",
	});
}

export default Component;
