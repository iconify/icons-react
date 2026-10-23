import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tfl2a5buh.css';
import '../../css/e/ehss56bid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tfl2a5buh"/><path class="ehss56bid"/></g>`,
		"fallback": "vadivam:bell-electric",
	});
}

export default Component;
