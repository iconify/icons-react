import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xstu1qbzb.css';
import '../../css/u/uz15-_bpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xstu1qbzb"/><path class="uz15-_bpe"/></g>`,
		"fallback": "lets-icons:chat-duotone",
	});
}

export default Component;
