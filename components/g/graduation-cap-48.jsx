import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhjv-fbep.css';
import '../../css/h/hkvtvtm6r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhjv-fbep"/><path class="hkvtvtm6r"/>`,
		"fallback": "energy-icons:graduation-cap-48",
	});
}

export default Component;
