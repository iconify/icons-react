import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a5rkt8uxw.css';
import '../../css/k/k211u6byz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a5rkt8uxw"/><path class="k211u6byz"/></g>`,
		"fallback": "tabler:explicit-off",
	});
}

export default Component;
