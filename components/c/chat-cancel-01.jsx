import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lx26nzbvq.css';
import '../../css/a/aua0i6bem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lx26nzbvq"/><path class="aua0i6bem"/></g>`,
		"fallback": "hugeicons:chat-cancel-01",
	});
}

export default Component;
