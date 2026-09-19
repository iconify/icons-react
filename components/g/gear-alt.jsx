import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg5knbbvk.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg5knbbvk"/>`,
		"fallback": "f7:gear-alt",
	});
}

export default Component;
