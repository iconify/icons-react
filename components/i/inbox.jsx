import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x_ct48b7d.css';
import '../../css/x/xl354v--g.css';
import '../../css/j/jqna_5nqw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="x_ct48b7d"/><path class="xl354v--g"/><path class="jqna_5nqw"/></g>`,
		"fallback": "icon-park-outline:inbox",
	});
}

export default Component;
