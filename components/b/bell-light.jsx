import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/of31x1y7m.css';
import '../../css/q/qm72ynbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="of31x1y7m"/><path class="qm72ynbos"/></g>`,
		"fallback": "lets-icons:bell-light",
	});
}

export default Component;
