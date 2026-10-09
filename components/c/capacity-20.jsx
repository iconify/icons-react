import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swnxxbo0p.css';
import '../../css/l/l4yoqg4nl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swnxxbo0p"/><path class="l4yoqg4nl"/>`,
		"fallback": "energy-icons:capacity-20",
	});
}

export default Component;
