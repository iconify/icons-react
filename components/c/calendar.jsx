import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/toj3ujbtf.css';
import '../../css/z/z9-bgwbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="toj3ujbtf"/><path class="z9-bgwbwy"/></g>`,
		"fallback": "meteor-icons:calendar",
	});
}

export default Component;
