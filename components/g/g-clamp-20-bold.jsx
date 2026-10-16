import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzv7ahb5l.css';
import '../../css/j/jmwk00zjz.css';
import '../../css/a/ajpasxnjv.css';
import '../../css/d/d4i9wcynv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzv7ahb5l"/><path class="jmwk00zjz"/><path class="ajpasxnjv"/><path class="d4i9wcynv"/>`,
		"fallback": "energy-icons:g-clamp-20-bold",
	});
}

export default Component;
