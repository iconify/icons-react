import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aamb_ippd.css';
import '../../css/l/l4cebudyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="aamb_ippd"/><path class="l4cebudyd"/></g>`,
		"fallback": "coolicons:accessibility-alt-duocolor-round",
	});
}

export default Component;
