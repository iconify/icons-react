import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/i/i6psyz68x.css';
import '../../css/o/o6ain5brh.css';
import '../../css/p/p_u131ihg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="i6psyz68x"/><path class="o6ain5brh"/><path class="p_u131ihg"/></g>`,
		"fallback": "matita:download",
	});
}

export default Component;
