import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilbm1ebie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilbm1ebie"/>`,
		"fallback": "bxl:brave-browser",
	});
}

export default Component;
