import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mq-xxibrt.css';
import '../../css/m/mcmvkhg3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mq-xxibrt"/><path class="mcmvkhg3v"/></g>`,
		"fallback": "lucide:globe-code",
	});
}

export default Component;
