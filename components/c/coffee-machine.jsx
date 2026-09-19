import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/f/fr8naq4ou.css';
import '../../css/k/k9kdzwoho.css';
import '../../css/m/m5znx-b1e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="fr8naq4ou"/><path class="k9kdzwoho"/><path class="m5znx-b1e"/></g>`,
		"fallback": "icon-park-solid:coffee-machine",
	});
}

export default Component;
