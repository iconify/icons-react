import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqf5v4byj.css';
import '../../css/j/jna5_7bho.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqf5v4byj"/><path class="jna5_7bho"/>`,
		"fallback": "energy-icons:conveyor-48-bold",
	});
}

export default Component;
