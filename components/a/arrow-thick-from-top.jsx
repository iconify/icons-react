import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hojzm4bji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hojzm4bji"/>`,
		"fallback": "cil:arrow-thick-from-top",
	});
}

export default Component;
