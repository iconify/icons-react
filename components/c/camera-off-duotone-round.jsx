import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hwhi7ybhv.css';
import '../../css/b/bt1xo-0wv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hwhi7ybhv"/><path class="bt1xo-0wv"/></g>`,
		"fallback": "coolicons:camera-off-duotone-round",
	});
}

export default Component;
