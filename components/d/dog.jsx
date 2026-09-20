import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xuo56rhps.css';
import '../../css/x/x47-c9waf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xuo56rhps"/><path class="x47-c9waf"/></g>`,
		"fallback": "tabler:dog",
	});
}

export default Component;
