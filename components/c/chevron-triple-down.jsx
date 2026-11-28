import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lcgkwgbzr.css';
import '../../css/q/qmcrci_5n.css';
import '../../css/i/in87klb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lcgkwgbzr"/><path class="qmcrci_5n"/><path class="in87klb7q"/></g>`,
		"fallback": "iconaut:chevron-triple-down",
	});
}

export default Component;
