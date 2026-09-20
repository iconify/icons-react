import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7q-667gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7q-667gm"/>`,
		"fallback": "mdi:floor-light-dual",
	});
}

export default Component;
