import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/klnli2bzd.css';
import '../../css/o/oeui3wblq.css';
import '../../css/l/lb5z5tb2v.css';
import '../../css/b/bmlr6ob0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="klnli2bzd wm-k"/><path class="oeui3wblq wm-shadow"/><path class="lb5z5tb2v wm-k"/><path class="bmlr6ob0i wm-a"/></g>`,
		"fallback": "withicons:flame-engrave",
	});
}

export default Component;
