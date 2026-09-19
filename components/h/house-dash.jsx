import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ttv65hftx.css';
import '../../css/g/gsawj4hzf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ttv65hftx"/><path class="gsawj4hzf"/></g>`,
		"fallback": "bi:house-dash",
	});
}

export default Component;
