import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/t8lnxgces.css';
import '../../css/n/n6762lb_a.css';
import '../../css/k/kfdh64trl.css';
import '../../css/d/dc83f5wdc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="t8lnxgces"/><path class="n6762lb_a"/><path class="kfdh64trl"/><path class="dc83f5wdc"/></g>`,
		"fallback": "icon-park-outline:baggage-delay",
	});
}

export default Component;
