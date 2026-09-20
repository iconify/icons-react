import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knarmjb2d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="knarmjb2d"/>`,
		"fallback": "streamline-flex:heart-rate-remix",
	});
}

export default Component;
