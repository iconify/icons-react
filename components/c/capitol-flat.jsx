import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ohzlo-pdv.css';
import '../../css/k/kanahbcvc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ohzlo-pdv"/><path class="kanahbcvc"/></g>`,
		"fallback": "streamline-color:capitol-flat",
	});
}

export default Component;
