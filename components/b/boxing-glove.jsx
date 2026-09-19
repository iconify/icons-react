import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oc2hzwbzo.css';
import '../../css/e/emuvuxb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oc2hzwbzo"/><path class="emuvuxb3l"/></g>`,
		"fallback": "iconoir:boxing-glove",
	});
}

export default Component;
