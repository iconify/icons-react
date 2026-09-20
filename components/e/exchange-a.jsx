import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qopkvebup.css';
import '../../css/t/th7v47buf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qopkvebup"/><path class="th7v47buf"/></g>`,
		"fallback": "mage:exchange-a",
	});
}

export default Component;
