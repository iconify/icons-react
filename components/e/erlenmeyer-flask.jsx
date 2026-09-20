import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/v/vz5ayus9i.css';
import '../../css/f/fw2vfk9gy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="vz5ayus9i"/><path class="fw2vfk9gy"/></g>`,
		"fallback": "streamline-plump:erlenmeyer-flask",
	});
}

export default Component;
