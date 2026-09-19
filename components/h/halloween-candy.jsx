import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs5zptt1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs5zptt1m"/>`,
		"fallback": "griddy-icons:halloween-candy",
	});
}

export default Component;
