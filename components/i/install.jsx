import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew8xs4bjt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew8xs4bjt"/>`,
		"fallback": "entypo:install",
	});
}

export default Component;
