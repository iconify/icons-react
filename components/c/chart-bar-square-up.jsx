import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhng6tn2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hhng6tn2x"/>`,
		"fallback": "griddy-icons:chart-bar-square-up",
	});
}

export default Component;
