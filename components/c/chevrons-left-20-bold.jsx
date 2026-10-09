import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9umykbju.css';
import '../../css/e/esmbl8oyw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9umykbju"/><path class="esmbl8oyw"/>`,
		"fallback": "energy-icons:chevrons-left-20-bold",
	});
}

export default Component;
