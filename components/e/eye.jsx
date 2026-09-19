import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpw-r42eq.css';

const viewBox = {"width":740,"height":700};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpw-r42eq"/>`,
		"fallback": "il:eye",
	});
}

export default Component;
