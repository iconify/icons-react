import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bt9hnzshg.css';
import '../../css/q/q_txgwbtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bt9hnzshg"/><path class="q_txgwbtz"/></g>`,
		"fallback": "tabler:gizmo",
	});
}

export default Component;
