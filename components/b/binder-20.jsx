import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx89adb5k.css';
import '../../css/k/ktkk4-3nx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx89adb5k"/><path class="ktkk4-3nx"/>`,
		"fallback": "energy-icons:binder-20",
	});
}

export default Component;
