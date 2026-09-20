import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf502rnmg.css';
import '../../css/w/w_mf8jb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf502rnmg"/><path class="w_mf8jb5k"/>`,
		"fallback": "mingcute:emergency-flashers-line",
	});
}

export default Component;
