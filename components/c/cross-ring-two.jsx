import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwl69gbad.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwl69gbad"/>`,
		"fallback": "icon-park:cross-ring-two",
	});
}

export default Component;
