import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do-_nxtdx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do-_nxtdx"/>`,
		"fallback": "ix:ellipse",
	});
}

export default Component;
