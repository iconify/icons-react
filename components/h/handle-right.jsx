import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/e/etzb_tbee.css';
import '../../css/z/zakgb2byz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="etzb_tbee"/><path class="zakgb2byz"/></g>`,
		"fallback": "icon-park-outline:handle-right",
	});
}

export default Component;
