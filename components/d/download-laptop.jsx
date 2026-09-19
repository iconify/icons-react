import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/oyq5l32hv.css';
import '../../css/n/ndtovtbdh.css';
import '../../css/d/dx2uoqbap.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="oyq5l32hv"/><path class="ndtovtbdh"/><path class="dx2uoqbap"/></g>`,
		"fallback": "icon-park-solid:download-laptop",
	});
}

export default Component;
