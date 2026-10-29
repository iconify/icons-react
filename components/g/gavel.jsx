import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tx1l_fszj.css';
import '../../css/a/aydzuvbkz.css';
import '../../css/k/kjyj4ubca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tx1l_fszj"/><path class="aydzuvbkz wm-a"/><path class="kjyj4ubca wm-s"/></g>`,
		"fallback": "withicons:gavel",
	});
}

export default Component;
