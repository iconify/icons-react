import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-zna8aim.css';
import '../../css/q/qjyultakh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-zna8aim"/><path class="qjyultakh"/>`,
		"fallback": "energy-icons:fusion-20",
	});
}

export default Component;
