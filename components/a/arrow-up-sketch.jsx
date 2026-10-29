import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j_xmk2b5o.css';
import '../../css/a/agdjpvb3s.css';
import '../../css/a/aps5q31pr.css';
import '../../css/h/h23a8zycn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="j_xmk2b5o wm-k"/><path class="agdjpvb3s wm-a"/><path class="aps5q31pr wm-k"/><path class="h23a8zycn wm-a"/></g>`,
		"fallback": "withicons:arrow-up-sketch",
	});
}

export default Component;
