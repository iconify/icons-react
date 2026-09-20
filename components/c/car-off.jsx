import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ccgyu3b2d.css';
import '../../css/a/ao72s3b_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ccgyu3b2d"/><path class="ao72s3b_g"/></g>`,
		"fallback": "tabler:car-off",
	});
}

export default Component;
