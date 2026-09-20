import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbfwdbcve.css';
import '../../css/h/hkdyxpbgs.css';
import '../../css/l/lxa0od6os.css';
import '../../css/v/vwhqg96li.css';
import '../../css/u/uw2h-eb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qbfwdbcve"/><path class="hkdyxpbgs"/><path class="lxa0od6os"/><path class="vwhqg96li"/><path class="uw2h-eb-b"/></g>`,
		"fallback": "streamline-cyber-color:bus-2",
	});
}

export default Component;
