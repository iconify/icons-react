import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkt0nymoo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkt0nymoo"/>`,
		"fallback": "coolicons:house-plus-fill-round",
	});
}

export default Component;
