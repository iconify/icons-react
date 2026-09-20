import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2dgu7u9m.css';
import '../../css/o/o3f-wscjt.css';
import '../../css/t/t78pq3b0b.css';
import '../../css/b/bat3n3-jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x2dgu7u9m"/><path class="o3f-wscjt"/><path class="t78pq3b0b"/><path class="bat3n3-jo"/></g>`,
		"fallback": "streamline-cyber-color:add-double",
	});
}

export default Component;
