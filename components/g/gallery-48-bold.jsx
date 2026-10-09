import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p96uvcb3z.css';
import '../../css/h/hpajvh8ur.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p96uvcb3z"/><path class="hpajvh8ur"/>`,
		"fallback": "energy-icons:gallery-48-bold",
	});
}

export default Component;
