import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq0kaj1jn.css';
import '../../css/m/mrqza92yb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq0kaj1jn"/><path class="mrqza92yb"/>`,
		"fallback": "bx:bxs-analyse",
	});
}

export default Component;
