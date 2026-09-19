import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0cihnbyr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0cihnbyr"/>`,
		"fallback": "fa-solid:hand-point-right",
	});
}

export default Component;
