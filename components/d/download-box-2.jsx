import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u08vk-bgg.css';
import '../../css/b/b_dsvybgn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="u08vk-bgg"/><path class="b_dsvybgn"/></g>`,
		"fallback": "streamline-plump:download-box-2",
	});
}

export default Component;
