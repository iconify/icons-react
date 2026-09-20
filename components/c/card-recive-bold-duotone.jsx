import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4-q_acah.css';
import '../../css/r/rve9bjm7q.css';
import '../../css/g/gvic217pt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4-q_acah"/><path clip-rule="evenodd" class="rve9bjm7q"/><path class="gvic217pt"/>`,
		"fallback": "solar:card-recive-bold-duotone",
	});
}

export default Component;
