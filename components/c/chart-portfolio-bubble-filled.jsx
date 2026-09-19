import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhn4pvblz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xhn4pvblz"/>`,
		"fallback": "griddy-icons:chart-portfolio-bubble-filled",
	});
}

export default Component;
