import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrlxi170y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrlxi170y"/>`,
		"fallback": "roentgen:car-on-ferry",
	});
}

export default Component;
