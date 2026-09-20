import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs66gybrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs66gybrt"/>`,
		"fallback": "mdi:desktop-classic",
	});
}

export default Component;
