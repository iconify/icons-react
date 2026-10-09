import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/u/u3mp5lqgi.css';
import '../../css/n/nyelv4byn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="u3mp5lqgi"/><path class="nyelv4byn"/>`,
		"fallback": "energy-icons:contrast-20-bold",
	});
}

export default Component;
