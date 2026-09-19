import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qtgbu-bfe.css';
import '../../css/d/dzg43m6ss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qtgbu-bfe"/><path class="dzg43m6ss"/></g>`,
		"fallback": "hugeicons:clipboard-copy",
	});
}

export default Component;
