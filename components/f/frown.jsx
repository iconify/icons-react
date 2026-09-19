import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm4x9mwjw.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm4x9mwjw"/>`,
		"fallback": "fa-solid:frown",
	});
}

export default Component;
