import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gvr7db0qu.css';
import '../../css/n/nmo7-m03s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gvr7db0qu"/><path class="nmo7-m03s wm-a"/></g>`,
		"fallback": "withicons:gold-ingot-solid",
	});
}

export default Component;
