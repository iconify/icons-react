import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq7_-sb7c.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq7_-sb7c"/>`,
		"fallback": "f7:cloud-sun-rain-fill",
	});
}

export default Component;
