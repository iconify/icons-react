import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/axs5ilbeq.css';
import '../../css/o/on_ijlhyo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="axs5ilbeq"/><path class="on_ijlhyo"/></g>`,
		"fallback": "streamline-flex-color:high-speed-train-front-flat",
	});
}

export default Component;
