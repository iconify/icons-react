import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q2zbpl4tu.css';
import '../../css/a/acsj1ojvf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q2zbpl4tu"/><path class="acsj1ojvf"/></g>`,
		"fallback": "at-icons:dna",
	});
}

export default Component;
