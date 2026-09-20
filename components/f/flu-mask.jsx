import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l2rn-bbbi.css';
import '../../css/o/o87ze1dox.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l2rn-bbbi"/><path class="o87ze1dox"/></g>`,
		"fallback": "streamline-color:flu-mask",
	});
}

export default Component;
