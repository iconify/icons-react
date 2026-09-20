import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/s/sfeb5af-i.css';
import '../../css/m/m6i9scbyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="sfeb5af-i"/><path class="m6i9scbyq"/></g>`,
		"fallback": "tdesign:chart-scatter",
	});
}

export default Component;
