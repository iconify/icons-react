import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/whqs1q3at.css';
import '../../css/z/zkx0jcb5b.css';
import '../../css/x/xbk20hdgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="whqs1q3at"/><path class="wm-k zkx0jcb5b"/><path class="wm-a xbk20hdgs"/></g>`,
		"fallback": "withicons:circle-stop-sketch",
	});
}

export default Component;
