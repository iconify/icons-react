import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc6ya-kvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc6ya-kvc"/>`,
		"fallback": "grommet-icons:contact-info",
	});
}

export default Component;
