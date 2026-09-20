import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/ptterccrf.css';
import '../../css/s/sbr7dmu5x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ptterccrf"/><path class="sbr7dmu5x"/></g>`,
		"fallback": "streamline-flex-color:check-square-flat",
	});
}

export default Component;
