import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jrmib2jjd.css';
import '../../css/u/uah0ipwxe.css';
import '../../css/z/zghmjfooh.css';
import '../../css/x/xkapnbb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jrmib2jjd"/><path class="uah0ipwxe wm-k"/><path class="wm-k zghmjfooh"/><path class="wm-a xkapnbb1l"/></g>`,
		"fallback": "withicons:align-bottom-sketch",
	});
}

export default Component;
