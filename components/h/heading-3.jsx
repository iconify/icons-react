import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ejg_wxkov.css';
import '../../css/x/xa3jgydgh.css';
import '../../css/k/kqkrbm6ip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ejg_wxkov"/><path class="wm-a xa3jgydgh"/><path class="kqkrbm6ip wm-s"/></g>`,
		"fallback": "withicons:heading-3",
	});
}

export default Component;
