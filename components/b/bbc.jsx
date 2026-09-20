import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnk5bq8ha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnk5bq8ha"/>`,
		"fallback": "simple-icons:bbc",
	});
}

export default Component;
