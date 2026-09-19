import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euzd-wbuo.css';
import '../../css/z/z3wkr3_hc.css';
import '../../css/o/o4lxspb9v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euzd-wbuo"/><path class="z3wkr3_hc"/><path class="o4lxspb9v"/>`,
		"fallback": "heroicons:cursor-arrow-ripple-16-solid",
	});
}

export default Component;
