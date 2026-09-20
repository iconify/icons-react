import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh-430moi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh-430moi"/>`,
		"fallback": "solar:course-up-broken",
	});
}

export default Component;
