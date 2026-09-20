import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x__4pgb6w.css';
import '../../css/k/k8-xzqb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x__4pgb6w"/><path class="k8-xzqb8e"/></g>`,
		"fallback": "tabler:history-toggle",
	});
}

export default Component;
