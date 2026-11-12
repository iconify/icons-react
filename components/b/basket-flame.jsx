import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rozys7bai.css';
import '../../css/g/gpp6-_j_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rozys7bai"/><path class="gpp6-_j_y"/></g>`,
		"fallback": "tabler:basket-flame",
	});
}

export default Component;
