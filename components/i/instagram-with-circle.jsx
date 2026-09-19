import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es0hutbci.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es0hutbci"/>`,
		"fallback": "entypo-social:instagram-with-circle",
	});
}

export default Component;
