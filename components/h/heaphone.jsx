import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zfe40388x.css';
import '../../css/y/yjh4kkbyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zfe40388x"/><path class="yjh4kkbyd"/></g>`,
		"fallback": "mage:heaphone",
	});
}

export default Component;
