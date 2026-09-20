import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ohgw9tnbi.css';
import '../../css/t/t_3s3mbhh.css';
import '../../css/g/gxyr9cctr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ohgw9tnbi"/><path clip-rule="evenodd" class="t_3s3mbhh"/><path class="gxyr9cctr"/></g>`,
		"fallback": "solar:banknote-2-bold-duotone",
	});
}

export default Component;
