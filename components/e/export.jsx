import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjtc9yosc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjtc9yosc"/>`,
		"fallback": "icons8:export",
	});
}

export default Component;
