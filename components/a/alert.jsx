import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yeip2-y6i.css';
import '../../css/a/ar_zf9d2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yeip2-y6i"/><path class="ar_zf9d2w"/></g>`,
		"fallback": "keyline-icons:alert",
	});
}

export default Component;
