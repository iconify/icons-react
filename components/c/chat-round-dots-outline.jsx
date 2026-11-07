import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocavnt7jz.css';
import '../../css/k/kkhl62fff.css';
import '../../css/w/wt1f10gjm.css';
import '../../css/g/gvlyjsbyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocavnt7jz"/><path class="kkhl62fff"/><path class="wt1f10gjm"/><path clip-rule="evenodd" class="gvlyjsbyr"/>`,
		"fallback": "solar:chat-round-dots-outline",
	});
}

export default Component;
