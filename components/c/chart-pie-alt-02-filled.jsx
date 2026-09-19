import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aboyzwb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aboyzwb_a"/>`,
		"fallback": "griddy-icons:chart-pie-alt-02-filled",
	});
}

export default Component;
