import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/ufrnihbht.css';
import '../../css/f/fw99tkv7s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ufrnihbht"/><path class="fw99tkv7s"/></g>`,
		"fallback": "streamline-plump:fit-height",
	});
}

export default Component;
