import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/te09ff07n.css';
import '../../css/n/n8t_egdrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="te09ff07n"/><path clip-rule="evenodd" class="n8t_egdrw"/></g>`,
		"fallback": "streamline-sharp-color:business-idea-money-flat",
	});
}

export default Component;
