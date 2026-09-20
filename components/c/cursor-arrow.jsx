import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ghg5u4q6s.css';
import '../../css/w/wo8_f4b3a.css';
import '../../css/k/k990pwbrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ghg5u4q6s"/><path class="wo8_f4b3a"/><path class="k990pwbrv"/></g>`,
		"fallback": "streamline-cyber-color:cursor-arrow",
	});
}

export default Component;
