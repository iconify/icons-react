import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a12gsqhdy.css';
import '../../css/e/ec3h0kz8j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a12gsqhdy"/><path class="ec3h0kz8j"/>`,
		"fallback": "energy-icons:battery-pack-20-bold",
	});
}

export default Component;
