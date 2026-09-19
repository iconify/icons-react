import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9edgh3ty.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9edgh3ty"/>`,
		"fallback": "ion:arrow-redo",
	});
}

export default Component;
