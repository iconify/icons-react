import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4-c966ww.css';
import '../../css/a/au8t5v7zm.css';
import '../../css/g/gk48d415h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4-c966ww"/><path class="au8t5v7zm"/><path class="gk48d415h"/>`,
		"fallback": "energy-icons:factory-48",
	});
}

export default Component;
