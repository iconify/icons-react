import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h210bm66l.css';
import '../../css/k/k7ytu5blc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h210bm66l"/><path class="k7ytu5blc"/>`,
		"fallback": "energy-icons:antenna-20",
	});
}

export default Component;
