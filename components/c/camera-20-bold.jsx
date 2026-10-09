import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt0-ruido.css';
import '../../css/b/b8usfzbqp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt0-ruido"/><path class="b8usfzbqp"/>`,
		"fallback": "energy-icons:camera-20-bold",
	});
}

export default Component;
