import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfgcicctr.css';
import '../../css/s/s4kbfzbzp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfgcicctr"/><path class="s4kbfzbzp"/>`,
		"fallback": "energy-icons:dice-3-20-bold",
	});
}

export default Component;
