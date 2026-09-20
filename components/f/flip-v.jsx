import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm1d98grv.css';
import '../../css/r/rgiy7zbva.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm1d98grv"/><path class="rgiy7zbva"/>`,
		"fallback": "vaadin:flip-v",
	});
}

export default Component;
