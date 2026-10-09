import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbr1c2bcx.css';
import '../../css/b/b-mh2-9jf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbr1c2bcx"/><path class="b-mh2-9jf"/>`,
		"fallback": "energy-icons:eraser-20-bold",
	});
}

export default Component;
