import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l1kz0rbeo.css';
import '../../css/h/hhq9cnbyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l1kz0rbeo"/><path class="hhq9cnbyq"/></g>`,
		"fallback": "tabler:building-circus",
	});
}

export default Component;
