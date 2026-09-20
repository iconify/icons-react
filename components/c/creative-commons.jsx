import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/w97nzrxjq.css';
import '../../css/m/mdpauxp_f.css';
import '../../css/n/nmrzd6rrg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="w97nzrxjq"/><path class="mdpauxp_f"/><path class="nmrzd6rrg"/></g>`,
		"fallback": "streamline-plump:creative-commons",
	});
}

export default Component;
