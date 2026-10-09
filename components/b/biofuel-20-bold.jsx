import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo4j70bbm.css';
import '../../css/v/v21ewjqfm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo4j70bbm"/><path class="v21ewjqfm"/>`,
		"fallback": "energy-icons:biofuel-20-bold",
	});
}

export default Component;
