import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lppmt7bfa.css';
import '../../css/v/vw22eibqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lppmt7bfa"/><path class="vw22eibqi"/></g>`,
		"fallback": "coolicons:arrow-right-to-line-duocolor-round",
	});
}

export default Component;
