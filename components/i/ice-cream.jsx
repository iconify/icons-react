import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p78tgrw2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p78tgrw2r"/>`,
		"fallback": "grommet-icons:ice-cream",
	});
}

export default Component;
