import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vu_--6bmx.css';
import '../../css/g/gowt-43lr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vu_--6bmx"/><path class="gowt-43lr"/></g>`,
		"fallback": "tabler:devices",
	});
}

export default Component;
