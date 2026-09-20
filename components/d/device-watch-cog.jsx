import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjo0hbcte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjo0hbcte"/>`,
		"fallback": "tabler:device-watch-cog",
	});
}

export default Component;
