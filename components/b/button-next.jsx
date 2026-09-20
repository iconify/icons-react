import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvwdf9i_u.css';
import '../../css/p/px1shxb0k.css';
import '../../css/u/utx5qccge.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mvwdf9i_u"/><path class="px1shxb0k"/><path class="utx5qccge"/></g>`,
		"fallback": "streamline-color:button-next",
	});
}

export default Component;
