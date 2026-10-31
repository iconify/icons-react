import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/as--48bbx.css';
import '../../css/d/dch1f6b5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="as--48bbx"/><path class="dch1f6b5t"/></g>`,
		"fallback": "coolicons:chat-duotone-round",
	});
}

export default Component;
