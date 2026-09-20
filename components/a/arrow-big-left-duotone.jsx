import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tawu72kpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tawu72kpc"/>`,
		"fallback": "keyline-icons:arrow-big-left-duotone",
	});
}

export default Component;
