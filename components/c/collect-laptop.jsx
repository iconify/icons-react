import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/u/usswkqb0n.css';
import '../../css/n/ndtovtbdh.css';
import '../../css/h/h8fjuyx1i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="usswkqb0n"/><path class="ndtovtbdh"/><path class="h8fjuyx1i"/></g>`,
		"fallback": "icon-park-solid:collect-laptop",
	});
}

export default Component;
