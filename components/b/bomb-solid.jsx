import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zdf_qgggs.css';
import '../../css/n/nnj7subgs.css';
import '../../css/b/b_890b6ez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="zdf_qgggs"/><path class="nnj7subgs wm-a"/><path class="b_890b6ez wm-s"/></g>`,
		"fallback": "withicons:bomb-solid",
	});
}

export default Component;
