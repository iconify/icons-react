import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/s/st72__-bh.css';
import '../../css/b/bqqq5-9ri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="st72__-bh"/><path class="bqqq5-9ri"/></g>`,
		"fallback": "lets-icons:chat-alt",
	});
}

export default Component;
