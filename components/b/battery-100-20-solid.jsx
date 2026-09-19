import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k6y8aobjy.css';
import '../../css/l/lbbvun5sx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k6y8aobjy"/><path clip-rule="evenodd" class="lbbvun5sx"/></g>`,
		"fallback": "heroicons:battery-100-20-solid",
	});
}

export default Component;
