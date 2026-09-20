import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lp90-8b9o.css';
import '../../css/d/dwhdw096h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lp90-8b9o"/><path class="dwhdw096h"/></g>`,
		"fallback": "streamline-color:cloud-wifi-flat",
	});
}

export default Component;
