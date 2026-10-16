import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djp6rcbat.css';
import '../../css/n/n292q15ch.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djp6rcbat"/><path class="n292q15ch"/>`,
		"fallback": "energy-icons:eye-closed-20-bold",
	});
}

export default Component;
