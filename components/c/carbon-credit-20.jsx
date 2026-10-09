import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/m/m8ytuwboy.css';
import '../../css/a/avtv4mbbr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="m8ytuwboy"/><path class="avtv4mbbr"/>`,
		"fallback": "energy-icons:carbon-credit-20",
	});
}

export default Component;
