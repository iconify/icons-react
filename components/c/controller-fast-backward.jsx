import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oua5ruzrk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oua5ruzrk"/>`,
		"fallback": "entypo:controller-fast-backward",
	});
}

export default Component;
