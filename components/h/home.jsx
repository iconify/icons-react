import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kapf5_9cq.css';
import '../../css/b/b0arhbfij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kapf5_9cq"/><path class="b0arhbfij"/></g>`,
		"fallback": "feather:home",
	});
}

export default Component;
