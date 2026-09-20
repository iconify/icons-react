import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f49dq_byk.css';
import '../../css/m/m4whwf_ut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f49dq_byk"/><path clip-rule="evenodd" class="m4whwf_ut"/></g>`,
		"fallback": "streamline-sharp-color:calendar-add-flat",
	});
}

export default Component;
