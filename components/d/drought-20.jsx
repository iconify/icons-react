import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7575cbkw.css';
import '../../css/p/p769e2bzk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7575cbkw"/><path class="p769e2bzk"/>`,
		"fallback": "energy-icons:drought-20",
	});
}

export default Component;
