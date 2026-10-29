import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l12p6vo3k.css';
import '../../css/q/qqmov0t5w.css';
import '../../css/l/l5ay5lbvr.css';
import '../../css/z/z15avum9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l12p6vo3k wm-k"/><path class="qqmov0t5w wm-k"/><path class="l5ay5lbvr wm-a"/><path class="wm-a z15avum9f"/>`,
		"fallback": "withicons-bauhaus:cloud-rain",
	});
}

export default Component;
