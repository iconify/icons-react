import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/noeq1abwj.css';
import '../../css/n/n736056kd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="noeq1abwj"/><path class="n736056kd"/></g>`,
		"fallback": "coolicons:devices-duocolor-round",
	});
}

export default Component;
