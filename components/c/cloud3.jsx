import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/g/gnbiabbsr.css';
import '../../css/q/qqxmbjmyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="gnbiabbsr"/><path class="qqxmbjmyz"/></g>`,
		"fallback": "reicon:cloud3",
	});
}

export default Component;
