import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ekztjp1aw.css';
import '../../css/a/a7muj-z5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ekztjp1aw"/><path class="a7muj-z5h"/></g>`,
		"fallback": "tabler:brand-qq",
	});
}

export default Component;
