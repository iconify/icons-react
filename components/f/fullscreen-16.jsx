import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgu2i2bgi.css';
import '../../css/g/gyh2arbtb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgu2i2bgi"/><path clip-rule="evenodd" class="gyh2arbtb"/>`,
		"fallback": "qlementine-icons:fullscreen-16",
	});
}

export default Component;
