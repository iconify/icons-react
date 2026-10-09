import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_1lwukaz.css';
import '../../css/g/gandzumwe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_1lwukaz"/><path class="gandzumwe"/>`,
		"fallback": "energy-icons:graduation-cap-20",
	});
}

export default Component;
