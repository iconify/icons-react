import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/z/za-9kdbrg.css';
import '../../css/m/m6257tb5b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="za-9kdbrg"/><path class="m6257tb5b"/></g>`,
		"fallback": "icon-park-outline:application-one",
	});
}

export default Component;
