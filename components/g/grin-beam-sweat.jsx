import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1fp4ibvq.css';

const viewBox = {"width":504,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1fp4ibvq"/>`,
		"fallback": "fa-solid:grin-beam-sweat",
	});
}

export default Component;
