import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v3flcn71c.css';
import '../../css/c/c7wfq8fmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v3flcn71c"/><path class="c7wfq8fmp"/></g>`,
		"fallback": "tabler:help-off",
	});
}

export default Component;
