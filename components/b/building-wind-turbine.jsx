import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e5jfzabtj.css';
import '../../css/p/p0g2tac2m.css';
import '../../css/b/bsf2wtbwe.css';
import '../../css/z/z5o8yvb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e5jfzabtj"/><path class="p0g2tac2m"/><path class="bsf2wtbwe"/><path class="z5o8yvb-j"/></g>`,
		"fallback": "tabler:building-wind-turbine",
	});
}

export default Component;
