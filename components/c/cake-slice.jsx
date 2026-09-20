import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/w2h6rqbbj.css';
import '../../css/e/ekg34hb7e.css';
import '../../css/f/f1f6vpblq.css';
import '../../css/v/vtoebn-cq.css';
import '../../css/h/hmnpgl_gg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="w2h6rqbbj"/><path class="ekg34hb7e"/><path class="f1f6vpblq"/><path class="vtoebn-cq"/><path class="hmnpgl_gg"/></g>`,
		"fallback": "streamline-plump-color:cake-slice",
	});
}

export default Component;
