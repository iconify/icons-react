import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p-ergccey.css';
import '../../css/k/kr41us1ha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p-ergccey"/><path class="kr41us1ha"/></g>`,
		"fallback": "vadivam:file-terminal",
	});
}

export default Component;
