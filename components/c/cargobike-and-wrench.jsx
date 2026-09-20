import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp8co0bte.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp8co0bte"/>`,
		"fallback": "pinhead:cargobike-and-wrench",
	});
}

export default Component;
