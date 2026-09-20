import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbfsq-g3p.css';
import '../../css/w/w5v4f9b3d.css';
import '../../css/j/jpv6g7hti.css';

const viewBox = {"width":1024,"height":130};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbfsq-g3p"/><path class="w5v4f9b3d"/><path class="jpv6g7hti"/>`,
		"fallback": "thesvg-color:google-workspace-wordmark-light",
	});
}

export default Component;
