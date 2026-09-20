import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unfzw3b8q.css';
import '../../css/q/qx7qnen9i.css';
import '../../css/r/rrv638bwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="unfzw3b8q"/><rect class="qx7qnen9i"/><path clip-rule="evenodd" class="rrv638bwv"/></g>`,
		"fallback": "lets-icons:battery-low",
	});
}

export default Component;
