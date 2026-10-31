import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p52u7fomt.css';
import '../../css/o/ob0455u5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p52u7fomt"/><path class="ob0455u5l"/></g>`,
		"fallback": "coolicons:cloud-off-duocolor-round",
	});
}

export default Component;
