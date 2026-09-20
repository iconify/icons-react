import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dlgjh2-kv.css';
import '../../css/q/qknr80bfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dlgjh2-kv"/><path class="qknr80bfw"/></g>`,
		"fallback": "streamline-ultimate:athletics-javelin-throwing",
	});
}

export default Component;
