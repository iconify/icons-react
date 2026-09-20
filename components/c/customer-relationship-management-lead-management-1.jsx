import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m6fcf8xge.css';
import '../../css/p/pjrhhab_o.css';
import '../../css/h/h4yzg0-cc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m6fcf8xge"/><path class="pjrhhab_o"/><path class="h4yzg0-cc"/></g>`,
		"fallback": "streamline-ultimate:customer-relationship-management-lead-management-1",
	});
}

export default Component;
