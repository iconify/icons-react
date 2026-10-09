import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7luzgj2a.css';
import '../../css/x/x_dypm6zl.css';
import '../../css/z/zi3h6zbwn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7luzgj2a"/><path class="x_dypm6zl"/><path class="zi3h6zbwn"/>`,
		"fallback": "energy-icons:cabin-20-bold",
	});
}

export default Component;
