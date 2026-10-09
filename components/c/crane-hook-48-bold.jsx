import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmwoaz3te.css';
import '../../css/m/m6lmdhbxv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmwoaz3te"/><path class="m6lmdhbxv"/>`,
		"fallback": "energy-icons:crane-hook-48-bold",
	});
}

export default Component;
