import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ehj10cn-t.css';
import '../../css/x/xiby4z7mg.css';
import '../../css/c/cyc4wyxww.css';
import '../../css/w/wqnsx2gcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ehj10cn-t"/><path class="xiby4z7mg"/><path class="cyc4wyxww"/><path clip-rule="evenodd" class="wqnsx2gcs"/></g>`,
		"fallback": "solar:chat-round-dots-outline",
	});
}

export default Component;
