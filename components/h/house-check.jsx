import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gsawj4hzf.css';
import '../../css/a/ah_z42b1s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gsawj4hzf"/><path class="ah_z42b1s"/></g>`,
		"fallback": "bi:house-check",
	});
}

export default Component;
