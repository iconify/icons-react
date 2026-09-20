import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f540g9cop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f540g9cop"/>`,
		"fallback": "keyline-icons:heading-5-sharp-fill",
	});
}

export default Component;
