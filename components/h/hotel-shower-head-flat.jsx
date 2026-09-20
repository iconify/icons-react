import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zom-l6blh.css';
import '../../css/e/evjri8d-f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zom-l6blh"/><path class="evjri8d-f"/></g>`,
		"fallback": "streamline-color:hotel-shower-head-flat",
	});
}

export default Component;
