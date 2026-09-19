import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n02uupbal.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n02uupbal"/>`,
		"fallback": "dinkie-icons:bow-and-arrow",
	});
}

export default Component;
