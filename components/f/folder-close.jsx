import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/p/pt3ayibtb.css';
import '../../css/x/x3fr-qpgw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="pt3ayibtb"/><path class="x3fr-qpgw"/></g>`,
		"fallback": "icon-park-outline:folder-close",
	});
}

export default Component;
