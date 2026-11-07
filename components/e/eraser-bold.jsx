import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwn8jibaq.css';
import '../../css/t/tksc1h7ms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwn8jibaq"/><path class="tksc1h7ms"/>`,
		"fallback": "solar:eraser-bold",
	});
}

export default Component;
