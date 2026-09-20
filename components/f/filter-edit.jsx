import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/q/q-eob553s.css';
import '../../css/o/oztyr0b6l.css';
import '../../css/o/obt5sdblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="q-eob553s"/><path class="oztyr0b6l"/><path class="obt5sdblw"/></g>`,
		"fallback": "reicon:filter-edit",
	});
}

export default Component;
