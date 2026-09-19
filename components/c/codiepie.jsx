import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c61p-ac-e.css';

const viewBox = {"width":1728,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c61p-ac-e"/>`,
		"fallback": "fa:codiepie",
	});
}

export default Component;
