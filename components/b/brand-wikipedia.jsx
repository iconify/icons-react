import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e5xrwlbat.css';
import '../../css/p/pahsu6r_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e5xrwlbat"/><path class="pahsu6r_h"/></g>`,
		"fallback": "tabler:brand-wikipedia",
	});
}

export default Component;
