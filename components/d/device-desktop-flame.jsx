import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anp7lrczn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anp7lrczn"/>`,
		"fallback": "tabler:device-desktop-flame",
	});
}

export default Component;
