import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m78b3fx0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m78b3fx0g"/>`,
		"fallback": "tabler:device-desktop-down",
	});
}

export default Component;
