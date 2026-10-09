import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gaiyacb2w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gaiyacb2w"/>`,
		"fallback": "energy-icons:blackout-48",
	});
}

export default Component;
