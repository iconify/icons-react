import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d-45sml5j.css';
import '../../css/l/l1sp9-bhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d-45sml5j"/><path class="l1sp9-bhf"/></g>`,
		"fallback": "tabler:cricket",
	});
}

export default Component;
