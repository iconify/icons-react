import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu-pc6k3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu-pc6k3w"/>`,
		"fallback": "keyline-icons:home-sharp-fill",
	});
}

export default Component;
