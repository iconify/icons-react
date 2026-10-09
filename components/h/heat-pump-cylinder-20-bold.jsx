import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s69k6bb7h.css';
import '../../css/o/ofyi6pbuy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s69k6bb7h"/><path class="ofyi6pbuy"/>`,
		"fallback": "energy-icons:heat-pump-cylinder-20-bold",
	});
}

export default Component;
