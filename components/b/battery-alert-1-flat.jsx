import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chm2o30cw.css';
import '../../css/r/rbkq9c8mn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="chm2o30cw"/><path clip-rule="evenodd" class="rbkq9c8mn"/></g>`,
		"fallback": "streamline-color:battery-alert-1-flat",
	});
}

export default Component;
