import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unfzw3b8q.css';
import '../../css/f/f9bz07hha.css';
import '../../css/r/rrv638bwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="unfzw3b8q"/><rect class="f9bz07hha"/><path clip-rule="evenodd" class="rrv638bwv"/></g>`,
		"fallback": "lets-icons:battery-full",
	});
}

export default Component;
