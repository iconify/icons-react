import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gahg-u41y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gahg-u41y"/>`,
		"fallback": "qlementine-icons:facebook-fill-24",
	});
}

export default Component;
