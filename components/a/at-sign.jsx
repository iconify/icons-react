import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jhhwf3bsv.css';
import '../../css/t/tloqhdbbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><ellipse class="jhhwf3bsv"/><path class="tloqhdbbp"/></g>`,
		"fallback": "reicon:at-sign",
	});
}

export default Component;
