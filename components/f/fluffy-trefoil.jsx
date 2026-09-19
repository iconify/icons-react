import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hal55f1hv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hal55f1hv"/>`,
		"fallback": "game-icons:fluffy-trefoil",
	});
}

export default Component;
