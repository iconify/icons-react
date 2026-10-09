import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfgcicctr.css';
import '../../css/v/vz8nc8bal.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfgcicctr"/><path class="vz8nc8bal"/>`,
		"fallback": "energy-icons:dice-5-20-bold",
	});
}

export default Component;
