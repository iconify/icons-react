import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7vrkybqp.css';

const viewBox = {"width":26,"height":10,"left":-1,"top":13};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7vrkybqp"/>`,
		"fallback": "thesvg-color:aws-icon",
	});
}

export default Component;
