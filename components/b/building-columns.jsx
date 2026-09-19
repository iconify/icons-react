import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfc33kbji.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfc33kbji"/>`,
		"fallback": "fa7-solid:building-columns",
	});
}

export default Component;
