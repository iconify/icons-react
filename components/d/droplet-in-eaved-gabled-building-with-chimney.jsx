import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoqh6zybg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoqh6zybg"/>`,
		"fallback": "pinhead:droplet-in-eaved-gabled-building-with-chimney",
	});
}

export default Component;
