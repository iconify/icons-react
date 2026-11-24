import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y7jmm0agp.css';
import '../../css/j/jikkgq90g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y7jmm0agp"/><path class="jikkgq90g"/></g>`,
		"fallback": "tabler:building-store-pin",
	});
}

export default Component;
