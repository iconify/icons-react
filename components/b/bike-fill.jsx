import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zs43ogbwe.css';
import '../../css/j/jprf2vb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zs43ogbwe"/><path class="jprf2vb8x"/></g>`,
		"fallback": "keyline-icons:bike-fill",
	});
}

export default Component;
