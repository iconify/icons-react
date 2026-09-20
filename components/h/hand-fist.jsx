import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qm_r6kbre.css';
import '../../css/z/zm6qctb6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qm_r6kbre"/><path class="zm6qctb6k"/></g>`,
		"fallback": "lucide:hand-fist",
	});
}

export default Component;
