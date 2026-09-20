import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q06-f5uwb.css';
import '../../css/h/htjb-9byh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q06-f5uwb"/><path class="htjb-9byh"/></g>`,
		"fallback": "keyline-icons:folders-duotone",
	});
}

export default Component;
