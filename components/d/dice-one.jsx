import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eps3jxbis.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eps3jxbis"/>`,
		"fallback": "fa-solid:dice-one",
	});
}

export default Component;
