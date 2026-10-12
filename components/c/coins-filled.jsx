import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znqcvhbmw.css';
import '../../css/x/xmo5rcozs.css';
import '../../css/w/w_5epib3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znqcvhbmw"/><path class="xmo5rcozs"/><path clip-rule="evenodd" class="w_5epib3e"/>`,
		"fallback": "lucide-extended:coins-filled",
	});
}

export default Component;
