import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bnx92h53q.css';
import '../../css/t/tocpb3f4y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="bnx92h53q"/><path class="tocpb3f4y"/></g>`,
		"fallback": "cryptocurrency-color:cs",
	});
}

export default Component;
