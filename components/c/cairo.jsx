import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtgxhbc5g.css';
import '../../css/u/uidnkmboz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtgxhbc5g"/><path class="uidnkmboz"/>`,
		"fallback": "devicon:cairo",
	});
}

export default Component;
