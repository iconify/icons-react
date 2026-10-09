import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i49h8ss5i.css';
import '../../css/j/jvv5eu4ka.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i49h8ss5i"/><path class="jvv5eu4ka"/>`,
		"fallback": "energy-icons:carbon-label-20",
	});
}

export default Component;
