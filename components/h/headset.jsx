import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c6_4ysbse.css';
import '../../css/x/xg3wadbpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c6_4ysbse"/><path class="xg3wadbpz"/></g>`,
		"fallback": "tabler:headset",
	});
}

export default Component;
