import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgrnoabib.css';
import '../../css/k/kjish1bii.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgrnoabib"/><path class="kjish1bii"/>`,
		"fallback": "energy-icons:battery-empty-20-bold",
	});
}

export default Component;
