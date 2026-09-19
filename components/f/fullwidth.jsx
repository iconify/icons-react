import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1xol9yri.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1xol9yri"/>`,
		"fallback": "icon-park:fullwidth",
	});
}

export default Component;
