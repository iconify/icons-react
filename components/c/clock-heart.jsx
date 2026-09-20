import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mrx722b5b.css';
import '../../css/m/m8-teskio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mrx722b5b"/><path class="m8-teskio"/></g>`,
		"fallback": "tabler:clock-heart",
	});
}

export default Component;
