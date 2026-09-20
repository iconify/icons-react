import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sy5d6nb3h.css';
import '../../css/g/glxqgygip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sy5d6nb3h"/><path class="glxqgygip"/></g>`,
		"fallback": "tabler:brand-apple-arcade",
	});
}

export default Component;
