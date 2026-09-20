import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zip21sk6s.css';
import '../../css/a/ar57bybsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zip21sk6s"/><path class="ar57bybsg"/></g>`,
		"fallback": "tabler:graph",
	});
}

export default Component;
