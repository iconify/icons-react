import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amf5304bh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amf5304bh"/>`,
		"fallback": "game-icons:energise",
	});
}

export default Component;
