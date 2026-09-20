import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cch9ksu9f.css';
import '../../css/i/iweqpwb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cch9ksu9f"/><path class="iweqpwb-x"/></g>`,
		"fallback": "keyline-icons:cake-fill",
	});
}

export default Component;
