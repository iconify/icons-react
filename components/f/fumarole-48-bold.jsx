import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw6bgrrst.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw6bgrrst"/>`,
		"fallback": "energy-icons:fumarole-48-bold",
	});
}

export default Component;
