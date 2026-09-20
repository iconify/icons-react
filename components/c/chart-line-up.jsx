import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r60m7nbug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r60m7nbug"/>`,
		"fallback": "keyline-icons:chart-line-up",
	});
}

export default Component;
