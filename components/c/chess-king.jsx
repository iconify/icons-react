import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etkmd655w.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etkmd655w"/>`,
		"fallback": "fa6-regular:chess-king",
	});
}

export default Component;
