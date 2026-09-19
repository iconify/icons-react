import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0bz8sb9m.css';
import '../../css/r/rs6irjb6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0bz8sb9m"/><path class="rs6irjb6x"/>`,
		"fallback": "boxicons:check-circle",
	});
}

export default Component;
