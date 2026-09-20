import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvw7jmbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvw7jmbfm"/>`,
		"fallback": "mdi:human-hiking",
	});
}

export default Component;
