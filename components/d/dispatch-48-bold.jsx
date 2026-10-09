import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5nrbcb_x.css';
import '../../css/p/px1uvz_dr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5nrbcb_x"/><path class="px1uvz_dr"/>`,
		"fallback": "energy-icons:dispatch-48-bold",
	});
}

export default Component;
