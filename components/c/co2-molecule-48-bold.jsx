import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_7674bdo.css';
import '../../css/h/hx48xcbgj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_7674bdo"/><path class="hx48xcbgj"/>`,
		"fallback": "energy-icons:co2-molecule-48-bold",
	});
}

export default Component;
