import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tmduq-5gc.css';
import '../../css/z/zd1u9vbpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tmduq-5gc"/><path class="zd1u9vbpm"/></g>`,
		"fallback": "hugeicons:cursor-hold-02",
	});
}

export default Component;
