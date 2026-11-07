import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yxzpv8bqm.css';
import '../../css/t/txyjh1mwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yxzpv8bqm"/><path class="txyjh1mwq"/></g>`,
		"fallback": "solar:call-dropped-line-duotone",
	});
}

export default Component;
