import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0ygaxjmn.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0ygaxjmn"/>`,
		"fallback": "memory:flask-empty",
	});
}

export default Component;
