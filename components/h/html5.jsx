import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u779_db3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u779_db3l"/>`,
		"fallback": "simple-icons:html5",
	});
}

export default Component;
