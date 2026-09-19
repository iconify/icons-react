import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l79giibom.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l79giibom"/>`,
		"fallback": "cil:child-friendly",
	});
}

export default Component;
