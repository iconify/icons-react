import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnuscxboo.css';
import '../../css/i/iik--rn3y.css';
import '../../css/j/jdp6hwbta.css';
import '../../css/g/gpifwzblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="fnuscxboo"/><path class="iik--rn3y"/><path class="jdp6hwbta"/><path class="gpifwzblh"/>`,
		"fallback": "solar:globe-bold-duotone",
	});
}

export default Component;
