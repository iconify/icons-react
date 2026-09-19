import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcyrh0b4i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcyrh0b4i"/>`,
		"fallback": "icon-park-outline:car-battery",
	});
}

export default Component;
