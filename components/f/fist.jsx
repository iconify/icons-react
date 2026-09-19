import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdwl95bbl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdwl95bbl"/>`,
		"fallback": "icon-park-solid:fist",
	});
}

export default Component;
