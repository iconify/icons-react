import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x_dwqwivu.css';
import '../../css/v/vnq0g0eje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x_dwqwivu"/><path class="vnq0g0eje"/></g>`,
		"fallback": "lucide:check-square",
	});
}

export default Component;
