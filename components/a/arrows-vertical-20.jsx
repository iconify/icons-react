import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl8q1nb4n.css';
import '../../css/l/l5kfglbol.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl8q1nb4n"/><path class="l5kfglbol"/>`,
		"fallback": "energy-icons:arrows-vertical-20",
	});
}

export default Component;
