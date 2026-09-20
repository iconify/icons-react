import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd4a3wzlb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd4a3wzlb"/>`,
		"fallback": "subway:cercle-3",
	});
}

export default Component;
