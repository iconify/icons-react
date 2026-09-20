import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/glzspckma.css';
import '../../css/d/dcqqb7ynd.css';
import '../../css/u/u6f_22mim.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="glzspckma"/><path class="dcqqb7ynd"/><path clip-rule="evenodd" class="u6f_22mim"/></g>`,
		"fallback": "streamline-color:inbox-favorite-flat",
	});
}

export default Component;
