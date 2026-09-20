import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kwh0ribcs.css';
import '../../css/e/e40as4btc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kwh0ribcs"/><path class="e40as4btc"/></g>`,
		"fallback": "tabler:hand-finger-off",
	});
}

export default Component;
