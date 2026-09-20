import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvln8zfdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvln8zfdm"/>`,
		"fallback": "thesvg-color:autocannon",
	});
}

export default Component;
