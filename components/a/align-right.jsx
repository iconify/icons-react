import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsefpcb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsefpcb4d"/>`,
		"fallback": "meteor-icons:align-right",
	});
}

export default Component;
