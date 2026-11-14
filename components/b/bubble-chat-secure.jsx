import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qloeeh4pd.css';
import '../../css/t/tw_5ixbdl.css';
import '../../css/c/c6dpzhafn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qloeeh4pd"><path class="tw_5ixbdl"/><path class="c6dpzhafn"/></g>`,
		"fallback": "hugeicons:bubble-chat-secure",
	});
}

export default Component;
