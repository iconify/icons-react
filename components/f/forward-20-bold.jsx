import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao5pawu6s.css';
import '../../css/v/v-ad93beh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao5pawu6s"/><path class="v-ad93beh"/>`,
		"fallback": "energy-icons:forward-20-bold",
	});
}

export default Component;
