import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9g2p8bff.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9g2p8bff"/>`,
		"fallback": "pinhead:cargobike-and-dollar",
	});
}

export default Component;
