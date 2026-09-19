import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl8o-nbbh.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl8o-nbbh"/>`,
		"fallback": "zmdi:code",
	});
}

export default Component;
