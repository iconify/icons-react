import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw-24x-1s.css';
import '../../css/j/jr59nabqc.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 iw-24x-1s"/><path class="clr-i-outline clr-i-outline-path-2 jr59nabqc"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:flame-line",
	});
}

export default Component;
