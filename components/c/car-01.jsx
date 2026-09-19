import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/l8jfa-mie.css';
import '../../css/t/tgdgzvbfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="l8jfa-mie"/><path class="tgdgzvbfj"/></g>`,
		"fallback": "hugeicons:car-01",
	});
}

export default Component;
