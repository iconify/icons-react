import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-jg9iuni.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-jg9iuni"/>`,
		"fallback": "selfhst:apache-kafka",
	});
}

export default Component;
