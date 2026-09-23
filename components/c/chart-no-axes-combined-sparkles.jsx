import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v7g32rbre.css';
import '../../css/c/cpsjjkueh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v7g32rbre"/><path class="cpsjjkueh"/></g>`,
		"fallback": "keyline-icons:chart-no-axes-combined-sparkles",
	});
}

export default Component;
