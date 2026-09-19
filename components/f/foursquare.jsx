import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfhg8myyz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfhg8myyz"/>`,
		"fallback": "icon-park-outline:foursquare",
	});
}

export default Component;
