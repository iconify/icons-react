import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/apz38mt4g.css';
import '../../css/h/ht5h3ou9h.css';
import '../../css/q/q26m725ij.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="apz38mt4g"/><path class="ht5h3ou9h"/><path class="q26m725ij"/></g>`,
		"fallback": "streamline-flex-color:airship-flat",
	});
}

export default Component;
