import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4gg6fwiv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4gg6fwiv"/>`,
		"fallback": "entypo-social:foursquare",
	});
}

export default Component;
