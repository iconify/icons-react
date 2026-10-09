import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7x4h2b-v.css';
import '../../css/j/jzue8hbld.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7x4h2b-v"/><path class="jzue8hbld"/>`,
		"fallback": "energy-icons:hot-air-balloon-48",
	});
}

export default Component;
