import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h3lxvsd0i.css';
import '../../css/y/yxwzk_xqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h3lxvsd0i"/><path class="yxwzk_xqe"/></g>`,
		"fallback": "coolicons:duck-duocolor-round",
	});
}

export default Component;
