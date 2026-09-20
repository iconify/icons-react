import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3azj_gbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3azj_gbf"/>`,
		"fallback": "ri:artboard-2-fill",
	});
}

export default Component;
