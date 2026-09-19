import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryrfwlbde.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryrfwlbde"/>`,
		"fallback": "fa-solid:hand-lizard",
	});
}

export default Component;
