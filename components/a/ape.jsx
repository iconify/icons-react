import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b2cujxb7v.css';
import '../../css/c/c4165obse.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="b2cujxb7v"/><path class="c4165obse"/></g>`,
		"fallback": "cryptocurrency-color:ape",
	});
}

export default Component;
