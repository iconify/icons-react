import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/z7h9dmbpz.css';
import '../../css/t/tb6y_5xyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="z7h9dmbpz"/><path class="tb6y_5xyd"/></g>`,
		"fallback": "mage:dashboard-bar",
	});
}

export default Component;
