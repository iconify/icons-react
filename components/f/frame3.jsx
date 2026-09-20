import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zvnpanbli.css';
import '../../css/o/ov9n30kid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zvnpanbli"/><path class="ov9n30kid"/></g>`,
		"fallback": "reicon:frame3",
	});
}

export default Component;
