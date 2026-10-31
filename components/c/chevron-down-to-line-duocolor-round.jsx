import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nsn8ivtct.css';
import '../../css/a/a5yxnab-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nsn8ivtct"/><path class="a5yxnab-z"/></g>`,
		"fallback": "coolicons:chevron-down-to-line-duocolor-round",
	});
}

export default Component;
