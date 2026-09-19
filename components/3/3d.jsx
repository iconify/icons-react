import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbhvj-b7o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbhvj-b7o"/>`,
		"fallback": "cil:3d",
	});
}

export default Component;
