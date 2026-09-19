import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyj-t4bhd.css';

const viewBox = {"width":304,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyj-t4bhd"/>`,
		"fallback": "zmdi:camera-front",
	});
}

export default Component;
