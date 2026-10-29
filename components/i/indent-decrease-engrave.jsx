import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p8u-xw6ko.css';
import '../../css/m/msg-wubhq.css';
import '../../css/w/w9ylbrb7f.css';
import '../../css/m/m6i-bjqet.css';
import '../../css/n/nuq9sybcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="p8u-xw6ko wm-k"/><path class="msg-wubhq wm-a"/><path class="w9ylbrb7f wm-shadow"/><path class="m6i-bjqet wm-k"/><path class="nuq9sybcn wm-a"/></g>`,
		"fallback": "withicons:indent-decrease-engrave",
	});
}

export default Component;
