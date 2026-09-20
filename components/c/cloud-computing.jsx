import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gkyhxdcsi.css';
import '../../css/y/y_0euxb8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gkyhxdcsi"/><path class="y_0euxb8u"/></g>`,
		"fallback": "tabler:cloud-computing",
	});
}

export default Component;
