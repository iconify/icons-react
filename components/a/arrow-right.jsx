import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/c1hcm1bbs.css';
import '../../css/g/g72revbpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="c1hcm1bbs"/><path class="g72revbpy"/></g>`,
		"fallback": "matita:arrow-right",
	});
}

export default Component;
