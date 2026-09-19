import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irx53ppki.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irx53ppki"/>`,
		"fallback": "icon-park-outline:halo",
	});
}

export default Component;
