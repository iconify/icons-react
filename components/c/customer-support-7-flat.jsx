import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fepog6hcc.css';
import '../../css/p/p5c_gev7k.css';
import '../../css/b/b2qeqbbuw.css';
import '../../css/v/vkxtl9xjy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fepog6hcc"/><path clip-rule="evenodd" class="p5c_gev7k"/><path class="b2qeqbbuw"/><path class="vkxtl9xjy"/></g>`,
		"fallback": "streamline-plump-color:customer-support-7-flat",
	});
}

export default Component;
