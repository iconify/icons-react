import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d4zhwxbde.css';
import '../../css/t/tg8emrdzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d4zhwxbde"/><path clip-rule="evenodd" class="tg8emrdzt"/></g>`,
		"fallback": "streamline-sharp-color:archive-box-flat",
	});
}

export default Component;
