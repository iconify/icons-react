import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujilh4b6o.css';
import '../../css/q/q9et3dbor.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujilh4b6o"/><path class="q9et3dbor"/>`,
		"fallback": "energy-icons:bandage-20-bold",
	});
}

export default Component;
