import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vjjd-8xuz.css';
import '../../css/h/hwx4vkn6k.css';
import '../../css/n/nxh4btbrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vjjd-8xuz"/><path class="hwx4vkn6k"/><path class="nxh4btbrd"/></g>`,
		"fallback": "vadivam:file-user",
	});
}

export default Component;
