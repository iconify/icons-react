import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bi92fxdfc.css';
import '../../css/q/qchh_o2bi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bi92fxdfc"/><path class="qchh_o2bi"/></g>`,
		"fallback": "streamline-sharp:customer-support-setting",
	});
}

export default Component;
