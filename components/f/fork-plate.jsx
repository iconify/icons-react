import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/m/mykzoqbnm.css';
import '../../css/g/givcu0byc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="mykzoqbnm"/><path class="givcu0byc"/></g>`,
		"fallback": "streamline-plump:fork-plate",
	});
}

export default Component;
