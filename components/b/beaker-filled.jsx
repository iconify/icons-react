import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oip_zgb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oip_zgb6w"/>`,
		"fallback": "griddy-icons:beaker-filled",
	});
}

export default Component;
