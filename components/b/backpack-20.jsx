import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6-fuybka.css';
import '../../css/t/tk8vkib5c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6-fuybka"/><path class="tk8vkib5c"/>`,
		"fallback": "energy-icons:backpack-20",
	});
}

export default Component;
