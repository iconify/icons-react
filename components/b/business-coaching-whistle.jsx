import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/msq17g53b.css';
import '../../css/v/vcsu7_i3s.css';
import '../../css/r/rwa67obkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="msq17g53b"/><path class="vcsu7_i3s"/><path class="rwa67obkh"/></g>`,
		"fallback": "streamline-freehand-color:business-coaching-whistle",
	});
}

export default Component;
